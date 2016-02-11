'use strict';

var Bing = require('node-bing-api')({
    accKey: process.env.BING_KEY
});

exports.index = function (req, res) {
    var imageResults = [];
    var searchTerm = req.params.term;

    Bing.images(searchTerm, function (error, ress, body) {
        body.d.results.slice(0, 9).forEach(function (elem) {
            var result = {
                title: elem.Title,
                image: elem.MediaUrl,
                site: elem.SourceUrl
            };
            imageResults.push(result);
        });

        res.send(imageResults);
    });
};