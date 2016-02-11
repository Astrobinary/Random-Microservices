'use strict';


$(document).ready(function () {
    var sidebarStatus = false;

    function closeMenu() {
        sidebarStatus = false;

        if ($('.sidebar').width() === 230) {
            $('.sidebar').animate({
                width: '39px'
            }, 500);
            $('.card').animate({
                marginLeft: '25px'
            }, 500);
            $('#icon').animate({
                marginLeft: '8px'
            }, 500);
        } else {
            $('.sidebar').animate({
                width: '50px'
            }, 500);
            $('.card').animate({
                marginLeft: '50px'
            }, 500);
            $('#icon').animate({
                marginLeft: '12px'
            }, 500);
        }

        $('#icon').removeClass('fa-arrow-left');
        $('#icon').addClass('fa-bars');
        $('.links').animate({
            paddingLeft: '0px'
        });

        $('.blue').text('unix');
        $('.green').text('file');
        $('.red').text('url');
        $('.purple').text('add');
        $('.orange').text('img');
    }

    $('.nav a').on('click', function () {
        closeMenu();
    });

    //Animates the sidebar
    $('#icon').click(function () {
        if (sidebarStatus === false) {
            sidebarStatus = true;

            if ($('.sidebar').width() === 39) {
                $('.sidebar').animate({
                    width: '230px'
                }, 500);
                $('.card').animate({
                    marginLeft: '230px'
                }, 500);
            } else {
                $('.sidebar').animate({
                    width: '250px'
                }, 500);
                $('.card').animate({
                    marginLeft: '250px'
                }, 500);
            }

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
            closeMenu();
        }
    });


    //Sets and follows waypoints for side menu
    function getRelatedContent(el) {
        return $($(el).attr('href'));
    }

    $('.nav a').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: getRelatedContent(this).offset().top
        });
    });

    $('.card')
        .waypoint(function (direction) {
            $('.nav a[href="#' + $(this).parent().attr('id') + '"] div').toggleClass('active', direction === 'down');
        }, {
            offset: '60%'
        })
        .waypoint(function (direction) {
            $('.nav a[href="#' + $(this).parent().attr('id') + '"] div').toggleClass('active', direction === 'up');
        }, {
            offset: function () {
                return -$(this).height() + 200;
            }
        });


    //Handles Unix Timestamp card on enter
    $('.unix-text').keydown(function (event) {
        if (event.keyCode === 13) {
            var input = $('.unix-text').val();
            $.get('/api/timestamp/' + input, function (data) {
                $('.unix-response').text(data);
            });
        }
    });

    //Handles URL Shortener card on enter
    $('.url-text').keydown(function (event) {
        if (event.keyCode === 13) {
            var input = $('.url-text').val();
            $.get('/api/short/' + input, function (data) {
                $('.url-response').text(data);
            });
        }
    });

    //Handles Image Search card on enter
    $('.img-text').keydown(function (event) {
        if (event.keyCode === 13) {
            var input = $('.img-text').val();
            $.get('/api/img/' + input, function (data) {
                var output = data[0];
                $('.img-response').text(JSON.stringify(output));
            });
        }
    });

    //Handles My Address card
    $('.process-address').click(function () {
        $.get('/api/whoami/', function (data) {
            $('.address-response').text(data);
        });
    });


});