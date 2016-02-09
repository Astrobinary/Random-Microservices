'use strict';

exports.index = function (req, res) {

    var ipAddress = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;

    var data = {
        ip: ipAddress,
        language: req.headers['accept-language'].split(',')[0],
        software: req.headers['user-agent'].split(') ')[0].split(' (')[1]
    };

    res.send(JSON.stringify(data));
};