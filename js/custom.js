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
        autoPlayHoverPause: true
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
        autoPlayHoverPause: true
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