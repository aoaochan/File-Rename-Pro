// =====================================================================================================
// 1. Requires
// =====================================================================================================
const invoke = window.__TAURI__.invoke || window.__TAURI__.core.invoke;
const { message } = window.__TAURI__.dialog;



// =====================================================================================================
// 2. Variables
// =====================================================================================================
// -----------------------------------------------------------------------------------------------------
// 2-1. Header
// -----------------------------------------------------------------------------------------------------
/**
 * @type {HTMLButtonElement}
 */
const btnSelectFolder = document.getElementById('btnSelectFolder');

/**
 * @type {HTMLParagraphElement}
 */
const labelDisplaySelectedFolder = document.getElementById('labelDisplaySelectedFolder');

const defaultValue_labelDisplaySelectedFolder = "(...)";

// -----------------------------------------------------------------------------------------------------
// 2-2. Body
// -----------------------------------------------------------------------------------------------------
/**
 * @type {HTMLParagraphElement}
 */
const labelDisplayFileListBefore = document.getElementById('labelDisplayFileListBefore');

/**
 * @type {HTMLParagraphElement}
 */
const labelDisplayFileListArrow = document.getElementById('labelDisplayFileListArrow');

/**
 * @type {HTMLParagraphElement}
 */
const labelDisplayFileListAfter = document.getElementById('labelDisplayFileListAfter');

const defaultValue_labelDisplayFileList = "(...)";

const defaultValue_labelDisplayFileListArrow = "<br><br>→";

// -----------------------------------------------------------------------------------------------------
// 2-3. Footer
// -----------------------------------------------------------------------------------------------------
/**
 * @type {HTMLInputElement}
 */
const inputNewName = document.getElementById('inputNewName');

/**
 * @type {HTMLButtonElement}
 */
const btnRename = document.getElementById('btnRename');

// -----------------------------------------------------------------------------------------------------
// 2-4. Ect
// -----------------------------------------------------------------------------------------------------
const messageTitle = "File Rename Pro";
const charArrow = "→";

let currentFiles;



// =====================================================================================================
// 3. Functions
// =====================================================================================================
// -----------------------------------------------------------------------------------------------------
// 3-1. for Select Folder <Button>
// -----------------------------------------------------------------------------------------------------
/**
 * @typedef {FolderContent}
 * @property {string} path
 * @property {string[]} files
 */
/**
 * fn select_folder(state: tauri::State<'_, FolderState>) -> Option<FolderContent>
 * @returns {Promise<FolderContent>}
 */
async function getFolderContent() {
  try {
    /**
     * @type {FolderContent | undefined}
     */
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

// -----------------------------------------------------------------------------------------------------
// 3-2. for Rename <Button>
// -----------------------------------------------------------------------------------------------------
/**
 * fn rename_files(new_name: String, state: tauri::State<'_, FolderState>) -> Result<(), String>
 * @param {string} newName 
 * @return {Promise<void>}
 */
async function renameFiles(newName) {
  try {
    await invoke('rename_files', { newName });

    resetUi();

    message("Done!", { title: messageTitle, kind: 'info' });
  } catch (error) {
    const errorMessage = `[ERR_002]:\n${error}`
    console.error(errorMessage);
    message(errorMessage, { title: messageTitle, kind: 'error' });
  }
}

// -----------------------------------------------------------------------------------------------------
// 3-3. Reset UI
// -----------------------------------------------------------------------------------------------------
/**
 * @returns {void}
 */
function resetUi() {
  // Header
  labelDisplaySelectedFolder.innerHTML = defaultValue_labelDisplaySelectedFolder;
  
  // Body
  labelDisplayFileListBefore.innerHTML = defaultValue_labelDisplayFileList;
  labelDisplayFileListArrow.innerHTML = defaultValue_labelDisplayFileListArrow;
  labelDisplayFileListAfter.innerHTML = defaultValue_labelDisplayFileList;

  // Footer
  inputNewName.value = "";

  // Variables
  currentFiles = [];
}

// -----------------------------------------------------------------------------------------------------
// 3-4. Get Preview Changes to string array
// -----------------------------------------------------------------------------------------------------
/**
 * 
 * @param {string[]} files 
 * @return {{ length: number, before: string[], after: string[] }}
 */
function getPreviewChanges(files) {
  const previewChanges = {
    length: files.length,
    before: [],
    after: []
  };

  let isAddableToAfter = inputNewName.value.trim().length > 0;

  if (!isAddableToAfter) previewChanges.after = files.map(() => "(...)");

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    previewChanges.before.push(file);

    if (isAddableToAfter) {
      const index = String(i + 1).padStart(3, '0');
      const extension = (() => {
        const arr = file.split('.');
        return arr[arr.length - 1];
      })();
      previewChanges.after.push(`${inputNewName.value}-${index}.${extension}`);
    }
  }

  return previewChanges;
}

// -----------------------------------------------------------------------------------------------------
// 3-5. Applying the preview changes
// -----------------------------------------------------------------------------------------------------
function applyPreviewChanges(files) {
  const previewChanges = getPreviewChanges(files);

  for (let i = 0; i < previewChanges.length; i++) {
    const before = previewChanges.before[i];
    const after = previewChanges.after[i];

    if (i === 0) labelDisplayFileListBefore.innerHTML = before;
    else labelDisplayFileListBefore.innerHTML += before;
    
    if (i !== 0) labelDisplayFileListArrow.innerHTML += charArrow;
    else labelDisplayFileListArrow.innerHTML = defaultValue_labelDisplayFileListArrow;

    if (i === 0) labelDisplayFileListAfter.innerHTML = after;
    else labelDisplayFileListAfter.innerHTML += after;

    if (i < previewChanges.length - 1) {
      labelDisplayFileListBefore.innerHTML += "<br>";
      labelDisplayFileListArrow.innerHTML += "<br>";
      labelDisplayFileListAfter.innerHTML += "<br>";
    }
  }
}



// =====================================================================================================
// 4. Events
// =====================================================================================================
// -----------------------------------------------------------------------------------------------------
// 4-1. Select Folder <Button>
// -----------------------------------------------------------------------------------------------------
const requireElementsForSelectFolderButton = [
  btnSelectFolder, labelDisplaySelectedFolder,
  labelDisplayFileListBefore, labelDisplayFileListArrow, labelDisplayFileListAfter
];

if (!requireElementsForSelectFolderButton.every(Boolean)) {
  const errorMessage = `[ERR_003]:\nFailed to load HTMLElements required for the Select Button.`
  console.error(errorMessage);
  message(errorMessage, { title: messageTitle, kind: 'error' });
}

btnSelectFolder.addEventListener('click', async () => {
  const folderContent = await getFolderContent();

  if (!folderContent) return;

  labelDisplaySelectedFolder.textContent = folderContent.path;

  applyPreviewChanges(folderContent.files);

  currentFiles = folderContent.files;
});

// -----------------------------------------------------------------------------------------------------
// 4-2. Rename <Button>
// -----------------------------------------------------------------------------------------------------

const requireElementsForRenameButton = [ inputNewName, btnRename ];

if (!requireElementsForRenameButton.every(Boolean)) {
  const errorMessage = `[ERR_004]:\nFailed to load HTMLElements required for the Rename Button.`
  console.error(errorMessage);
  message(errorMessage, { title: messageTitle, kind: 'error' });
}
  
btnRename.addEventListener('click', () => {
  const newName = inputNewName.value.trim();

  if (newName.length === 0) {
    message("Please enter a new name for the files.", { title: messageTitle, kind: 'error' });
    return;
  }

  if (!currentFiles || currentFiles.length === 0) {
    message("Please pick the folder first.", { title: messageTitle, kind: 'error' });
    return;
  }

  renameFiles(newName);
});

// -----------------------------------------------------------------------------------------------------
// 4-3. inputNewName Value Changed Event for preview changes
// -----------------------------------------------------------------------------------------------------
inputNewName.addEventListener('input', (event) => {
  const currentValue = event.target.value;

  if (!currentFiles || currentFiles.length === 0) return;

  applyPreviewChanges(currentFiles)
});