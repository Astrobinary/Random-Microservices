'use strict';

var express = require('express');
var controller = require('./img.controller');

var router = express.Router();

router.get('/:term', controller.index);

module.exports = router;