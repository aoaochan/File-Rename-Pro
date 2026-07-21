const { APP_DIR } = require('../dir');
const { run } = require('../utils');

async function buildMac() {
    // rustup target install
    await run('rustup', ['target', 'add', 'aarch64-apple-darwin', 'x86_64-apple-darwin']);

    // .dmg (Apple Silicon | arm64)
    await run('npm', ['run', 'tauri', 'build', '--', '--target', 'aarch64-apple-darwin'], { cwd: APP_DIR });

    // .dmg (Universal | x64 | arm64)
    await run('npm', ['run', 'tauri', 'build', '--', '--target', 'universal-apple-darwin'], { cwd: APP_DIR });
}

module.exports = { buildMac };