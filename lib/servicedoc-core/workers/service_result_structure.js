// Same as @serviceUse
var apiWorker = require('./service_use.js');

// Additional information for error log
var _messages = {
    common: {
        element: 'apiSuccessStructure',
        usage  : '@serviceSuccessStructure group',
        example: '@serviceDefine MyValidSuccessStructureGroup Some title\n@serviceSuccessStructure MyValidSuccessStructureGroup'
    }
};

/**
 * PreProcess
 *
 * @param {Object[]} parsedFiles
 * @param {String[]} filenames
 * @param {Object}   packageInfos
 * @returns {Object}
 */
function preProcess(parsedFiles, filenames, packageInfos) {
    return apiWorker.preProcess(parsedFiles, filenames, packageInfos, 'defineSuccessStructure');
}

/**
 * PostProcess
 *
 * @param {Object[]} parsedFiles
 * @param {String[]} filenames
 * @param {Object[]} preProcess
 * @param {Object}   packageInfos
 */
function postProcess(parsedFiles, filenames, preProcess, packageInfos) {
    apiWorker.postProcess(parsedFiles, filenames, preProcess, packageInfos, 'defineSuccessStructure', 'successStructure', _messages);
}

/**
 * Exports
 */
module.exports = {
    preProcess : preProcess,
    postProcess: postProcess
};
