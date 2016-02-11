'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ShortSchema = new Schema({
    unique: Number,
    original: String,
    short: String,

});

module.exports = mongoose.model('Short', ShortSchema);