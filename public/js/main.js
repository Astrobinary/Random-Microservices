'use strict';

$(document).ready(function () {
    var sidebarStatus = false;
    $('#icon').click(function () {
        if (sidebarStatus === false) {
            sidebarStatus = true;

            $('.sidebar').animate({
                width: '250px'
            }, 500);
            $('.card').animate({
                marginLeft: '230px'
            }, 500);

            $('#icon').removeClass('fa-bars');
            $('#icon').addClass('fa-arrow-left');

            $('#icon').animate({
                marginLeft: '200px'
            }, 500);

            $('.links').animate({
                paddingLeft: '55px'
            });

            $('.blue').text('unix timestamp');
            $('.green').text('file metadata');
            $('.red').text('url shortener');
            $('.purple').text('my address');
            $('.orange').text('image abstraction');

        } else {
            sidebarStatus = false;

            $('.sidebar').animate({
                width: '50px'
            }, 500);
            $('.card').animate({
                marginLeft: '30px'
            }, 500);

            $('#icon').removeClass('fa-arrow-left');
            $('#icon').addClass('fa-bars');

            $('#icon').animate({
                marginLeft: '12px'
            }, 500);
            $('.links').animate({
                paddingLeft: '0px'
            });

            $('.blue').text('unix');
            $('.green').text('file');
            $('.red').text('url');
            $('.purple').text('add');
            $('.orange').text('img');

        }
    });
});