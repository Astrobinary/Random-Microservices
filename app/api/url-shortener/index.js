'use strict';

var express = require('express');
var controller = require('./url.controller');

var router = express.Router();

router.get('/:url*', controller.index);


module.exports = router;