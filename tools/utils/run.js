const { spawn } = require('node:child_process');

const { APP_DIR } = require('../dir');

async function run(cmd, args, opts = {}) {
    return new Promise((resolve, reject) => {
        console.log(`\n🎬 ${cmd} ${args.join(' ')}`);

        const child = spawn(cmd, args, {
            stdio: 'inherit',
            shell: process.platform === 'win32',
            ...opts
        });

        child.on('error', reject);
        child.on('close', (code) => {
            if (code === 0) resolve();
            else reject(new Error(`${cmd} exited with code ${code}`));
        });
    });
}

module.exports = { run };