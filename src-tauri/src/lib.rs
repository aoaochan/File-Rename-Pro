use rfd::FileDialog;
use std::path::PathBuf;
use std::sync::Mutex;

#[derive(serde::Serialize)]
struct FolderContent {
    path: String,
    files: Vec<String>,
}

#[derive(Default)]
struct FolderState {
    path: Mutex<Option<PathBuf>>,
}

#[tauri::command]
fn select_folder(state: tauri::State<'_, FolderState>) -> Option<FolderContent> {
    if let Some(path) = FileDialog::new().pick_folder() {
        if let Ok(mut path_guard) = state.path.lock() {
            *path_guard = Some(path.clone());
        }

        let path_str = path.to_string_lossy().into_owned();
        let mut file_names = Vec::new();

        if let Ok(entries) = std::fs::read_dir(path) {
            for entry in entries.flatten() {
                if let Ok(file_type) = entry.file_type() {
                    if file_type.is_file() {
                        if let Some(name) = entry.file_name().to_str() {
                            file_names.push(name.to_string());
                        }
                    }
                }
            }
        }

        Some(FolderContent {
            path: path_str,
            files: file_names,
        })
    } else {
        None
    }
}

#[tauri::command]
fn rename_files(new_name: String, state: tauri::State<'_, FolderState>) -> Result<(), String> {
    let path = {
        let path_guard = state
            .path
            .lock()
            .map_err(|_| "Failed to access global state".to_string())?;
        match &*path_guard {
            Some(p) => p.clone(),
            None => return Err("Please pick the folder first.".to_string()),
        }
    };

    let mut file_paths = Vec::new();
    if let Ok(entries) = std::fs::read_dir(&path) {
        for entry in entries.flatten() {
            if let Ok(file_type) = entry.file_type() {
                if file_type.is_file() {
                    file_paths.push(entry.path());
                }
            }
        }
    }

    file_paths.sort();

    for (index, old_path) in file_paths.into_iter().enumerate() {
        let extension = old_path
            .extension()
            .and_then(|ext| ext.to_str())
            .unwrap_or("");
        let new_file_name = if extension.is_empty() {
            format!("{}-{:03}", new_name, index + 1)
        } else {
            format!("{}-{:03}.{}", new_name, index + 1, extension)
        };

        let mut new_path = old_path.clone();
        new_path.set_file_name(new_file_name);

        std::fs::rename(&old_path, &new_path).map_err(|e| format!("Failed to rename: {}", e))?;
    }

    Ok(())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
        .manage(FolderState::default())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![select_folder, rename_files])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
