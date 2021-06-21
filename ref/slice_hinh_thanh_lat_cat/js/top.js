$(document).ready(function(e) {
    new WOW().init();
});


jQuery(function($) {
    $('#top_info .tlt').textillate({
        loop: false,
        minDisplayTime: 2000,
        autoStart: true,
        initialDelay: 500,
        in: {
            delay: 100, // set the delay between each character
        }
    });


    $('.tlt_act').bind('inview', function(event, visible) {
        if (visible === true) {
            $(this).find('.tlt').textillate({
                loop: false,
                minDisplayTime: 100,
                autoStart: true,
                initialDelay: 100,
                in: {
                    delay: 100, // set the delay between each character
                }
            });
        }
    });

});

// slider banner01 under
$(document).ready(function() {
    "use strict";
    var scrollSpeed = 1.2;
    var posX = 50;
    setInterval(function() {
        posX -= scrollSpeed;
        $('.text_en01').css("background-position", posX + "px 0px");
    }, 50);
});

/*===========box link==========*/
$(document).ready(function(e) {
    $(".box06_list_sub > li").click(function() {
        window.location = $(this).find("a").attr("href");
        return false;
    });
});