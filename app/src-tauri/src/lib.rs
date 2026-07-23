// =====================================================================================================
// 1. Requires
// =====================================================================================================
use rfd::FileDialog;
use tauri::menu::{MenuBuilder, SubmenuBuilder};
use std::path::PathBuf;
use std::sync::Mutex;



// =====================================================================================================
// 2. Struct
// =====================================================================================================
// -----------------------------------------------------------------------------------------------------
// 2-1. for Select Folder Function
// -----------------------------------------------------------------------------------------------------
#[derive(serde::Serialize)]
struct FolderContent {
    path: String,
    files: Vec<String>,
}

// -----------------------------------------------------------------------------------------------------
// 2-2. for Saving Path
// -----------------------------------------------------------------------------------------------------
#[derive(Default)]
struct FolderState {
    path: Mutex<Option<PathBuf>>,
}



// =====================================================================================================
// 3. Functions (Tauri Command)
// =====================================================================================================
// -----------------------------------------------------------------------------------------------------
// 3-1. Select Folder
// -----------------------------------------------------------------------------------------------------
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
                            if !name.starts_with('.') {
                                file_names.push(name.to_string());
                            }
                        }
                    }
                }
            }
        }

        file_names.sort();

        Some(FolderContent {
            path: path_str,
            files: file_names,
        })
    } else {
        None
    }
}

// -----------------------------------------------------------------------------------------------------
// 3-2. Rename Files
// -----------------------------------------------------------------------------------------------------
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
                    if let Some(name) = entry.file_name().to_str() {
                        if !name.starts_with('.') {
                            file_paths.push(entry.path());
                        }
                    }
                }
            }
        }
    }

    file_paths.sort();

    for (i, old_path) in file_paths.into_iter().enumerate() {
        let extension = old_path
            .extension()
            .and_then(|ext| ext.to_str())
            .unwrap_or("");
        let index = i + 1;
        let new_file_name = if extension.is_empty() {
            format!("{}-{:03}", new_name, index)
        } else {
            format!("{}-{:03}.{}", new_name, index, extension)
        };

        let mut new_path = old_path.clone();
        new_path.set_file_name(new_file_name);

        std::fs::rename(&old_path, &new_path).map_err(|e| format!("Failed to rename: {}", e))?;
    }

    Ok(())
}



// =====================================================================================================
// 4. Main (Tauri)
// =====================================================================================================
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_dialog::init())
        .manage(FolderState::default())
        .invoke_handler(tauri::generate_handler![select_folder, rename_files])
        .setup(|app| {
            // -----------------------------------------------------------------------------------------------------
            // 4-1. Native application menus
            // -----------------------------------------------------------------------------------------------------
            let file_menu = SubmenuBuilder::new(app, "File")
                .text("new", "New")
                .text("select_folder", "Select Folder")
                .text("rename", "Rename")
                .text("exit", "Exit")
                .build()?;

            let menu = MenuBuilder::new(app)
                .items(&[&file_menu])
                .build()?;

            app.set_menu(menu)?;

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
