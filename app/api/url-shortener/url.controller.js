'use strict';

var Short = require('./url.model');

exports.index = function (req, res) {
    var uniqueNum = Math.floor(1000 + Math.random() * 9000);

    function checkURL(url) {
        var regex = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
        return regex.test(url);
    }

    if (checkURL(req.url.slice(1))) {
        Short.find({
            original: req.params.url,
        }, function (err, url) {

            if (err) {
                console.log('error');
            }
            if (url.length < 1 || url === null) {
                Short.create({
                    original: req.url.slice(1),
                    short: 'https://random302.herokuapp.com/' + uniqueNum,
                    unique: uniqueNum
                });

                var shortUrl = {
                    short: 'https://random302.herokuapp.com/' + uniqueNum,
                    original: req.url.slice(1)
                };

                return res.send(JSON.stringify(shortUrl));
            } else {
                return res.send(JSON.stringify(url[0].short));
            }
        });
    } else {
        return res.send('Invalid Url. Make sure to add http://');
    }

};