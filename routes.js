'use strict';

var Short = require('./app/api/url-shortener/url.model');

module.exports = function (app) {

    app.use('/api/file', require('./app/api/file-metadata'));
    app.use('/api/whoami', require('./app/api/header-parser'));
    app.use('/api/timestamp', require('./app/api/timestamp'));
    app.use('/api/img', require('./app/api/image-abstraction'));
    app.use('/api/short', require('./app/api/url-shortener'));

    app.route('/').get(function (req, res) {
        res.sendFile(process.cwd() + '/public/index.html');
    });

    app.route('/:shorturl').get(function (req, res) {
        Short.find({
            unique: req.params.shorturl,
        }, function (err, url) {
            if (err) {
                console.log('error');
            }
            if (url === undefined || url.length < 1) {
                return res.sendStatus(404);
            }

            return res.redirect(url[0].original);

        });
    });

};