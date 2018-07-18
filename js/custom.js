$(function () {
    new WOW().init();
});

$(function () {
    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

$(function () {

    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoPlayHoverPause: true,
    });

});

$(function () {

    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoPlayHoverPause: true
    });

});

$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

$(function () {

    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoPlayHoverPause: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 5
            },
            // breakpoint from 992 up
            992: {
                items: 6
            }
        }
    });

});

$(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            // hide nav bar
            $("nav").removeClass("gruvy-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            // show nav bar
            $("nav").addClass("gruvy-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});

$(function () {

    $("a.smooth-scrool").click(function (event) {

        event.preventDefault();

        // get/return id like #about, #work, etc.
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - 65
        }, 1000);

    });

});

$(function () {

    $(".navbar-collapse ul li a").on("click touch", function () {

        $(".navbar-toggle").click();

    });

});