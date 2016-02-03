'use strict';

var express = require('express'),
    mongoose = require('mongoose'),
    routes = require('./routes');

var port = process.env.PORT || 3000;
var ip = process.env.IP || '0.0.0.0';
var uri = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/url-shortener';

//mongoose.connect(uri);
//mongoose.connection.on('error', function (err) {
//    console.error('MongoDB connection error: ' + err);
//    process.exit(-1);
//});



var app = express();

routes(app);
app.enable('trust proxy');
app.use('/public', express.static(process.cwd() + '/public'));



app.listen(port, ip, function () {
    console.log('Listening on port: ' + port + ip);
});