$(document).ready(function() {
    "use strict";
    console.log('( •ิཬ•ั ) Hello!!!');
    $(window).bind('load scroll', function() {
        var scrollTop = $(this).scrollTop();
        if(scrollTop >= 200) {
            $('body').addClass('body-scrolled');
        } else {
            $('body').removeClass('body-scrolled');
        }
    });

    // MENU SP TOGGLE
    $("#menu-toggle").click(function() {
        $(this).toggleClass('open');
        $('body').toggleClass('open-nav');
    });
});