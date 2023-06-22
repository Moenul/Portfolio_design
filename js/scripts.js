$(document).ready(function(){

//  Scroll to top button -------------------
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('.scroll_to_top').fadeIn();
        } else {
            $('.scroll_to_top').fadeOut();
        }
    });

    $(".scroll_to_top").click(function() {
        $("html, body").animate({scrollTop: 0}, 500);
     });





});

