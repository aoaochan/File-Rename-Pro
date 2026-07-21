const { join } = require('node:path');

const ROOT_DIR = join(__dirname, '..');
const APP_DIR = join(ROOT_DIR, 'app');

module.exports = {
    ROOT_DIR,
    APP_DIR
};
