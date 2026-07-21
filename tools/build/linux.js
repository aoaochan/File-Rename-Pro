const { join } = require('node:path');

const { ROOT_DIR } = require('../dir');
const { run } = require('../utils');

async function build(tag, dockerfile, cacheKey) {
    // declare path
    const pathDockerfile = join(ROOT_DIR, 'tools', '.docker', dockerfile);

    console.log(pathDockerfile);

    // build
    await run('docker', ['build', '-t', tag, '-f', pathDockerfile, ROOT_DIR], { env: { ...process.env, DOCKER_BUILDKIT: '1' } });

    // run
    await run('docker', [
        'run', '--rm',
        '-v', `${ROOT_DIR}:/workspace`,
        '-v', `cargo-registry-${cacheKey}:/root/.cargo/registry`,
        '-v', `cargo-git-${cacheKey}:/root/.cargo/git`,
        '-v', `npm-cache-${cacheKey}:/root/.npm`,
        '-v', `cargo-target-${cacheKey}:/cache/target`,
        '-e', 'CARGO_TARGET_DIR=/cache/target',
        '-w', '/workspace/app',
        tag
    ]);
}

async function buildDebianBasedLinux() {
    await build('tauri-build-debian_based', 'Dockerfile.debian_based', 'debian');
}

async function buildRHELBasedLinux() {
    await build('tauri-build-rhel_based', 'Dockerfile.rhel_based', 'rhel');
}

module.exports = {
    buildDebianBasedLinux,
    buildRHELBasedLinux
};