// anchor in page
$(window).bind('load',function(){
	"use strict";
	$(function(){
		$('a[href^="#"]').click(function(){
			if ($($(this).attr('href') ).length ) {
				var p = $( $(this).attr('href') ).offset();
				if($(window).width() > 750){
					$('html,body').animate({ scrollTop: p.top - 130}, 400);
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
					$('html,body').animate({ scrollTop: p1.top - 130}, 400);
				}
				else {
					$('html,body').animate({ scrollTop: p1.top - 80}, 400);
				}
	}

});


//totop
$(document).ready(function() {
	"use strict";
	$(window).scroll(function () {
	 if ($(this).scrollTop() > 400) {
	 $("#toTop, #box_contact_sp, .box_con_fix").addClass("show");
	 } else {
	 $("#toTop, #box_contact_sp, .box_con_fix").removeClass("show");
	 }
	});
});

$(document).ready(function () {
    $(window).on("scroll", function () {
        w_width = $(window).width();
        if ($(this).scrollTop() > 400 && w_width < 751) {
            $('.header_r').addClass("show");
        } else {
            $('.header_r').removeClass("show");
        }
    });
});








