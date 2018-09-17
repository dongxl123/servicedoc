var trim = require('../utils/trim');

function parse(content) {
    content = trim(content);

    // Search: type, url and title
    // Example: {get} /user/:id Get User by ID.
    var parseRegExp = /^(.+?)(?:\s+(.+?))?$/g;
    var matches = parseRegExp.exec(content);

    if ( ! matches)
        return null;

    return {
        title : matches[1],
        service: matches[2] || ''
    };
}

/**
 * Exports
 */
module.exports = {
    parse : parse,
    path  : 'local',
    method: 'insert'
};
