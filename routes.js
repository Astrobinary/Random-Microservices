'use strict';

module.exports = function (app) {

    app.use('/api/file', require('./app/api/file-metadata'));
    app.use('/api/whoami', require('./app/api/header-parser'));
    app.use('/api/timestamp', require('./app/api/timestamp'));
    //    app.use('/api/image-abstraction', require('./app/api/image-abstraction'));
    //    app.use('/api/url-shortener', require('./app/api/url-shortener'));

    app.route('/')
        .get(function (req, res) {
            res.sendFile(process.cwd() + '/public/index.html');
        });

};