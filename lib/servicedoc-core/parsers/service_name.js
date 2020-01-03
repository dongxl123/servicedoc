var trim = require('../utils/trim');

function parse(content) {
    var name = trim(content);

    if(name.length === 0)
        return null;

    return {
        name: name.replace(/(\s+)/g, '_')
            .replace('(', '（')
            .replace(')', '）')
            .replace('<', '＜')
            .replace('>', '＞')
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
