// Same as @serviceParamTitle
var apiWorker = require('./service_param_title.js');

// Additional information for error log
var _messages = {
    common: {
        element: 'apiSuccess',
        usage  : '@serviceSuccess (group) varname',
        example: '@serviceDefine MyValidSuccessGroup Some title or 200 OK\n@serviceSuccess (MyValidSuccessGroup) username'
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
    return apiWorker.preProcess(parsedFiles, filenames, packageInfos, 'defineSuccessTitle');
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
    apiWorker.postProcess(parsedFiles, filenames, preProcess, packageInfos, 'defineSuccessTitle', 'success', _messages);
}

/**
 * Exports
 */
module.exports = {
    preProcess : preProcess,
    postProcess: postProcess
};
