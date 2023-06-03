// anchor in page
$(window).bind('load',function(){
    "use strict";
    $(function(){
        $('a[href^="#"]').click(function(){
            if ($($(this).attr('href') ).length ) {
                var p = $( $(this).attr('href') ).offset();
                if($(window).width() > 750){
                    $('html,body').animate({ scrollTop: p.top - 110}, 400);
                }
                else {
                    $('html,body').animate({ scrollTop: p.top - 80}, 400);
                }
            }
            return false;
        });
    });
});

// anchor top page #
$(window).bind('load',function(){
    "use strict";
 var hash = location.hash;
 if(hash){
      var p1 = $(hash).offset();
    if($(window).width() > 750){
                    $('html,body').animate({ scrollTop: p1.top - 110}, 400);
                }
                else {
                    $('html,body').animate({ scrollTop: p1.top - 80}, 400);
                }
    }

});



// mail form scroll 


$(window).bind('load', function() {
    "use strict";
    if($('#fmail_title01').length > 0) {
        var x = location.search;
        if (x.search('mode') >= 0) {
            var _mailFormPos = $('#fmail_title01').offset().top;
            _mailFormPos = parseInt(_mailFormPos);
            if ($(window).width() > 768) {
                $('html,body').animate({ scrollTop: _mailFormPos - 0 }, 400);
            } else {
                $('html,body').animate({ scrollTop: _mailFormPos - 0 }, 400);
            }
        }
    }
});


// =========== END - ANCHOR LINK ============

//BACK TO TOP
$(document).ready(function() {
    "use strict";
    $('.to_top').click(function() {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });
});

$(window).bind('load scroll', function() {
    "use strict";
    if($(this).scrollTop() >= 500) {
        $('.to_top').addClass('show');
    } else {
        $('.to_top').removeClass('show');    }
});

$(window).load(function() {
    if($(window).width() > 751) {

    /* Act on the event */
    var offSetG = $('.header_top').offset().top;
    var heightG = $('#gnavi').outerHeight();
   if($(window).width() > 750){

        $(window).scroll(function(event) {

     if($(window).scrollTop() > offSetG){
        $('.header_top').addClass('fixed');
        // $('#main').css('margin-top', heightG);
     }
     else{
        $('.header_top').removeClass('fixed');
        // $('#main').css('margin-top', 0);
     }
    });
    
   }

    }


}); 