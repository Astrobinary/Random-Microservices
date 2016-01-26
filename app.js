'use strict';

var express = require('express'),
    routes = require('./routes');

var app = express();

routes(app);

app.use('/public', express.static(process.cwd() + '/public'));

var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Listening on port: ' + port);
});