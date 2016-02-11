'use strict';

var multer = require('multer');
var upload = multer().single('file');

exports.index = function (req, res) {

    var details = {};

    upload(req, res, function (err) {
        if (err) {
            console.log('Uploading Error: ' + err);
            return;
        }

        if (req.file !== undefined) {
            details = {
                name: req.file.originalname,
                size: req.file.size,
            };
        } else {
            details = {
                name: 'No file selected, go back.',
                size: '0',
            };
        }

        res.send(JSON.stringify(details));
    });
};