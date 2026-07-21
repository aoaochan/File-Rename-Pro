const { APP_DIR } = require('../dir');
const { run } = require('../utils');

async function buildWindows() {
    // .msi (Windows | x64)
    await run('npm', ['run', 'tauri', 'build'], { cwd: APP_DIR });
}

module.exports = { buildWindows };