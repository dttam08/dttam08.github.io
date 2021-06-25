$(document).ready(function () {
	"use strict";
	//smoothScroll();
	GnaviF();
});

function smoothScroll() {
	"use strict";
	var fixedH = $('#header').outerHeight() + $('#gnavi').height();
	$('a[href^="#"]').click(function () {
		if ($($(this).attr('href')).length) {
			var p = $($(this).attr('href')).offset();
			$('html,body').animate({
				scrollTop: p.top - fixedH + 20
			}, 600);
		}
		return false;
	});
	var hash1= location.hash;
   	var $root = $('html, body');
   	if(hash1!=""){  
    	var top01 = $(hash1).offset().top;   
    	$root.animate({ scrollTop:top01 - fixedH + 20}, 600);
	}
}

(function ($) {
	"use strict";
	$("#totop").hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#totop').fadeIn();
		} else {
			$('#totop').fadeOut();
		}
	});
})(jQuery);

function GnaviF() {
	"use strict";
	var topH = $('#header .top').outerHeight();
	var fixedH = $('#header').outerHeight() + $('#gnavi').height();
	$(window).scroll(function () {
		if ($(this).scrollTop() > topH) {
			$('#header, #gnavi').addClass('fixed');
			$('#mainvisual').css({
				marginTop: fixedH
			});
		} else {
			$('#header, #gnavi').removeClass('fixed');
			$('#mainvisual').removeAttr('style');
		}
	});
}

$(document).ready(function() {
	$('#menu_btn').click(function() {
        var a = $('#gnavi_sp ul').css("right");
		if( a == "-320px"	) {
			$('#gnavi_sp ul').animate({right:0},400);
		}else {
			$('#gnavi_sp ul').animate({right:"-320px"},400);
			}
    });
});

$(window).bind('load resize',function(){
	"use strict";
	$(function(){
		$('a[href^="#"]').click(function(){
			if ( $( $(this).attr('href') ).length ) {
				var p = $( $(this).attr('href') ).offset();
				if(screen.width > 768){
					$('html,body').animate({ scrollTop: p.top - 165}, 400);
				}
				else {
					$('html,body').animate({ scrollTop: p.top - 65}, 400);
				}
			}
			return false;
		});
	});
});

$(window).bind('load resize',function(){
	"use strict";
	
 var hash = location.hash;

 if (hash !== "") {
	var p1 = $(hash).offset();
	if(screen.width > 768){
					$('html,body').animate({ scrollTop: p1.top - 165}, 400);
				}
				else {
					$('html,body').animate({ scrollTop: p1.top - 65}, 400);
				}}
});