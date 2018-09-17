// Same as @apiUse
var apiParser = require('./service_use.js');

/**
 * Exports
 */
module.exports = {
    parse        : apiParser.parse,
    path         : 'local.permission',
    method       : apiParser.method,
    preventGlobal: true
};
