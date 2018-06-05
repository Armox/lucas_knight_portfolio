'use strict';

var app = {};

app.listeners = function () {
    var $home = $('#nav-home');
    var $about = $('#nav-about');
    var $portfolio = $('#nav-portfolio');
    var $contact = $('#nav-contact');

    $home.on('click', function (e) {
        e.preventDefault();
        var position = $($(this).attr('href')).offset().top;

        $('body, html').animate({
            scrollTop: position
        }, 500, 'linear');
    });

    $about.on('click', function (e) {
        e.preventDefault();
        var position = $($(this).attr("href")).offset().top;

        $('body, html').animate({
            scrollTop: position
        }, 500, 'linear');
    });

    $portfolio.on('click', function (e) {
        e.preventDefault();
        var position = $($(this).attr("href")).offset().top;

        $('body, html').animate({
            scrollTop: position
        }, 500, 'linear');
    });

    $contact.on('click', function (e) {
        e.preventDefault();
        var position = $($(this).attr("href")).offset().top;

        $('body, html').animate({
            scrollTop: position
        }, 500, 'linear');
    });
};

$(document).ready(function () {
    app.listeners();
});

// $("a[href^='#']").click(function (e) {
//     e.preventDefault();

//     var position = $($(this).attr("href")).offset().top;

//     $("body, html").animate({
//         scrollTop: position
//     } /* speed */);
// });


// $('a[href*="#"]').on('click', function (e) {
//     e.preventDefault();

//     $('html, body').animate({
//         scrollTop: $($(this).attr('href')).offset().top
//     }, 500, 'linear');
// });