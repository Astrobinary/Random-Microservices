'use strict';

var moment = require('moment');

exports.index = function (req, res) {

    function naturalToUnix(nat) {
        return moment(nat, 'MMMM D, YYYY').format('X');
    }

    function unixToNatural(unix) {
        return moment.unix(unix).format('MMMM D, YYYY');
    }

    var date = req.params.date;
    var unix = null;
    var natural = null;

    if (+date >= 0) {
        unix = +date;
        natural = unixToNatural(unix);
    }

    if (isNaN(+date) && moment(date, 'MMMM D, YYYY').isValid()) {
        unix = naturalToUnix(date);
        natural = unixToNatural(unix);
    }

    var output = {
        'unix': unix,
        'natural': natural
    };
    res.send(JSON.stringify(output));
};