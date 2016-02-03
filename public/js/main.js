'use strict';

$(document).ready(function () {
    var sidebarStatus = false;
    $('.fa-bars').click(function () {
        if (sidebarStatus === false) {
            $('.sidebar').animate({
                width: '250px'
            }, 500);
            $('.card').animate({
                marginLeft: '230px'
            }, 500);
            sidebarStatus = true;
        } else {
            $('.sidebar').animate({
                width: '50px'
            }, 500);
            $('.card').animate({
                marginLeft: '30px'
            }, 500);
            sidebarStatus = false;
        }
    });
});