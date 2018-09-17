// Same as @apiExample
var apiParser = require('./service_example.js');

/**
 * Exports
 */
module.exports = {
    parse : apiParser.parse,
    path  : 'local.parameter.examples',
    method: apiParser.method
};
