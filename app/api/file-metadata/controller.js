'use strict';

exports.index = function (req, res) {
    res.sendFile(process.cwd() + '/public/file-metadata.html');
};