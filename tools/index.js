const { buildWindows, buildMac, buildDebianBasedLinux, buildRHELBasedLinux } = require('./build');

const mode = process.argv[2];

const allowedModes = ['all', 'win32', 'darwin', 'linux', 'debian', 'rhel'];

if (!mode || !allowedModes.includes(mode)) {
    console.error(
        '\x1b[33m%s\x1b[0m',
        '❗️ Error: Invalid Build Argument!\n\n' +
        '<Guideline>\n' +
        'npm run build <argument>\n\n' +
        '- Allowed argument types:\n' +
        allowedModes.map((target) => `  - ${target}`).join('\n')
    );
    process.exit(1);
}

(async () => {
    try {
        if (mode === 'all') {
            if (process.platform === 'win32') await buildWindows();
            else if (process.platform === 'darwin') await buildMac();

            await buildDebianBasedLinux();
            await buildRHELBasedLinux();
        } else if (mode === 'win32') {
            await buildWindows();    
        } else if (mode === 'darwin') {
            await buildMac();
        } else if (mode === 'linux') {
            await buildDebianBasedLinux();
            await buildRHELBasedLinux();            
        }else if (mode === 'debian') {
            await buildDebianBasedLinux();
        } else if (mode === 'rhel') {
            await buildRHELBasedLinux();
        } else {
            throw new Error(`invalid build argument: ${mode}`);
        }

        console.log('\n✅ The Tauri app build has been successfully completed.');
        process.exit(0);
    } catch (error) {
        console.error('\n❌ Failed to bulid:', error.message);
        process.exit(1);
    }
})();