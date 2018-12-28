var trim = require('../utils/trim');

function parse(content) {
    var service = trim(content);

    if (service.length === 0)
        return null;

    return {
        service: service.replace(/(\s+)/g, '_')
    };
}

/**
 * Exports
 */
module.exports = {
    parse         : parse,
    path          : 'local',
    method        : 'insert',
};
