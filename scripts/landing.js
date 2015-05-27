var $ = window.jQuery = require('jquery');
require('jquery.scrolling/jquery.scrolling');
require('slick-carousel');

$(function() {
    var video = $('.gotrl-panel-three-right video').scrolling({
        offsetLeft: 700,
        offsetTop: -100
    });

    var anltcs = $('.gotrl-panel-four-left img').scrolling({
        offsetLeft: -700,
        offsetTop: -30
    });

    if (video.is(':scrollin')) {
        slideInFromRight.call(video);
    } else {
        video.one('scrollin', slideInFromRight);
    }

    if (anltcs.is(':scrollin')) {
        slideInFromLeft.call(anltcs);
    } else {
        anltcs.one('scrollin', slideInFromLeft);
    }

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

            if (target.length) {
                $('html,body').animate({scrollTop: target.offset().top}, 1000);
                return false;
            }
        }
    });

    $('#gotrl-panel-five-carousel').slick({
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });
});

function slideInFromRight() {
    $(this).animate({
        opacity: 1,
        marginLeft: 0
    }, 500);
}

function slideInFromLeft() {
    $(this).animate({
        opacity: 1,
        marginLeft: -40
    }, 500);
}
