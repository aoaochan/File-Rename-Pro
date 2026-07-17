const invoke = window.__TAURI__.invoke || window.__TAURI__.core.invoke;
const { message } = window.__TAURI__.dialog;

/**
 * @type {HTMLButtonElement}
 */
const btnSelectFolder = document.getElementById('btnSelectFolder');

/**
 * @type {HTMLParagraphElement}
 */
const labelDisplaySelectedFolder = document.getElementById('labelDisplaySelectedFolder');

/**
 * @type {HTMLParagraphElement}
 */
const labelDisplayFileList = document.getElementById('labelDisplayFileList');

/**
 * @type {HTMLInputElement}
 */
const inputNewName = document.getElementById('inputNewName');

/**
 * @type {HTMLButtonElement}
 */
const btnRename = document.getElementById('btnRename');

const messageTitle = "File Rename Pro";

async function selectFolderAndGetFiles() {
  try {
    const folderContent = await invoke('select_folder');

    if (!folderContent || folderContent.files.length === 0) throw new Error("No files found or cancelled!");

    return folderContent;
  } catch (error) {
    const errorMessage = `[ERR_001]:\n${error}`

    console.error(errorMessage);
    message(errorMessage, { title: messageTitle, kind: 'error' });
  }

  return undefined;
}

async function renameFolderFiles(newName) {
  try {
    await invoke('rename_files', { newName });

    labelDisplaySelectedFolder.innerHTML = "(...)";
    labelDisplayFileList.innerHTML = "(...)";
    inputNewName.value = "";

    message("Done!", { title: messageTitle, kind: 'info' });
  } catch (error) {
    const errorMessage = `[ERR_002]:\n${error}`

    console.error(errorMessage);
    message(errorMessage, { title: messageTitle, kind: 'error' });
  }
}

if (btnSelectFolder && labelDisplayFileList && labelDisplaySelectedFolder) {
  btnSelectFolder.addEventListener('click', async () => {
    selectFolderAndGetFiles()
      .then((folderContent) => {
        if (folderContent) {
          labelDisplaySelectedFolder.textContent = folderContent.path;

          labelDisplayFileList.innerHTML = "";

          const fileList = folderContent.files;
          for (let i = 0; i < fileList.length; i++) {
            labelDisplayFileList.innerHTML += fileList[i];

            if (i < fileList.length - 1) labelDisplayFileList.innerHTML += "<br>";
          }
        }
      });
  });
}

if (inputNewName && btnRename) {
  btnRename.addEventListener('click', () => {
    const newName = inputNewName.value;

    if (newName.length === 0) message("Please enter a new name for the files.", { title: messageTitle, kind: 'warning' });
    else renameFolderFiles(newName);
  });
}