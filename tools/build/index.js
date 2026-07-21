const { buildWindows } = require('./windows');
const { buildMac } = require('./mac');
const { buildDebianBasedLinux, buildRHELBasedLinux } = require('./linux');

module.exports = {
    buildWindows,
    buildMac,
    buildDebianBasedLinux,
    buildRHELBasedLinux
};