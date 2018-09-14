var express = require('express');
var router = express.Router();

var exec = require('child_process').exec;
var cmd = 'node ./bin/servicedoc';

/* GET users listing. */
router.get('/123', function (req, res, next) {
    res.send('respond with a mytest');
});

module.exports = router;
