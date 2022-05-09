$(document).ready(function () {
  "use strict";
  $('a[href^="#"]').not('#totop').click(function () {
    if ($($(this).attr('href')).length) {
      var p = $($(this).attr('href')).offset();
      if ($(window).width() > 930) {
        $('html,body').animate({
          scrollTop: p.top - $('#header').outerHeight() - 10
        }, 600);
      } else {
        $('.menu-icon').removeClass('active');
        $('#gnavi').fadeOut('fast');
        $('.submenu').stop().slideUp();
        $('.over').removeClass('active');
        $('html,body').animate({
          scrollTop: p.top - $('#header').outerHeight() - 10
        }, 600);
      }
    }
    return false;
  });
  $(window).load(function () {
    var hash1 = location.hash;
    var $root = $('html, body');
    if (hash1 !== "") {
      var top01 = $(hash1).offset().top;
      if ($(window).width() > 930) {
        $root.animate({
          scrollTop: top01 - $('#header').outerHeight() - 10
        }, 600);
      } else {
        $root.animate({
          scrollTop: top01 - $('#header').outerHeight() - 10
        }, 600);
      }
    }
  });
});

$(document).ready(function () {
  "use strict";
  $("#totop, .f_call").hide();
  $(window).scroll(function () {
    var vW = $(window).width();
    if ($(this).scrollTop() > 100) {
      $('#totop').fadeIn();
      if (vW < 751) {
        $('.f_call').fadeIn();
      } else {
        $('.f_call').fadeOut();
      }
    } else {
      $('#totop').fadeOut();
      $('.f_call').fadeOut();
    }
  });
});

$(document).ready(function () {
  "use strict";
  $('.h_over').mouseenter(function () {
    if ($(this).hasClass('flag')) {
      return false;
    } else {
      $(this).find('.h_menu_sub').stop().slideDown();
    }
  });
  $('.h_over').mouseleave(function () {
    if ($(this).hasClass('flag')) {
      return false;
    } else {
      $(this).find('.h_menu_sub').stop().slideUp();
    }
  });
  $('.menu_icon').click(function () {
    if($(this).hasClass('flag')){
      $(this).toggleClass('active');
      $('#gnavi').stop().fadeToggle('fast');
      $('.over').removeClass('active');
      $('body').toggleClass('noscroll');      
    } else {
      $(this).toggleClass('active');
      $('#gnavi').stop().fadeToggle('fast');
      $('.submenu').stop().slideUp();
      $('.over').removeClass('active');
      $('body').toggleClass('noscroll');      
    }
  });
  $('.gnv_bg').click(function () {
    $('.menu_icon').toggleClass('active');
    $('#gnavi').stop().fadeOut('fast');
    $('.submenu').stop().slideUp();
    $('.over').removeClass('active');
    $('body').removeClass('noscroll');
  });
  $('.over').click(function () {
    if($(this).hasClass('flag')){
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.submenu').stop().slideUp();
      } else {
        $('.over').removeClass('active');
        $('.submenu').stop().slideUp();
        $(this).addClass('active');
        $(this).find('.submenu').stop().slideDown();
      }
    }
  });
  $(window).bind("load resize scroll", function () {
    var vW = $(window).width();
    var top = $(this).scrollTop();
    var hCall = $('.f_call').outerHeight();
    if (vW > 930) {
      $('.menu_icon').addClass('flag');
      $('.menu-icon').removeClass('active');
      $('.h_over').removeClass('flag');
      $('.over').removeClass('flag');
      $('#footer').removeAttr('style');
      $('#totop').css('bottom',220);
    } else {
      $('.h_over').addClass('flag');
      $('.over').addClass('flag');
      $('#footer').css('margin-bottom',hCall);
      $('#totop').css('bottom',hCall + 20);
      $('.menu_icon').removeClass('flag');
    }
      if (top > 300) {
        $('#header').addClass('fixed');
      } else {
        $('#header').removeClass('fixed');
      }

  });
});


$(document).ready(function () {
  "use strict";
  if ($('.step_slide').length) {
    $('.step_slide').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      autoplay: true,
    });
  }
  if ($('.under_anc').length) {
    var $w = $(window);
		var nav_h = $(".under_anc").innerHeight();
		var element = $(".under_anc");
		$w.on('load',function(){
			element.addClass('active')
		});
		$w.on("load scroll resize orientationchange", function(){
			var nav_pos = element.offset().top;
			var limit = $(".under #content").offset().top;
			var win_pos = $(window).scrollTop();
			var correction = ($(this).innerWidth() - $("#content").innerWidth()) /2;
      
				if ( limit > (win_pos + 100) ) {
					element.css({"margin-left":"0","position":"absolute"});
				}else{
					element.css({"margin-left":correction,"position":"fixed"});
				}
			
			// 4tabs
			if ( $(".job").length) {
				if ( $(".nav_target").eq(0).offset().top < nav_pos && $(".nav_target").eq(1).offset().top > nav_pos ) {
					element.find("li").removeClass("on");
					element.find("li").eq(0).addClass("on");
				}
				if ( $(".nav_target").eq(1).offset().top < nav_pos && $(".nav_target").eq(2).offset().top > nav_pos  ) {
					element.find("li").removeClass("on");
					element.find("li").eq(1).addClass("on");
				}
				if ( $(".nav_target").eq(2).offset().top < nav_pos && $(".nav_target").eq(3).offset().top > nav_pos ) {
					element.find("li").removeClass("on");
					element.find("li").eq(2).addClass("on");
				}
				if ( $(".nav_target").eq(3).offset().top < nav_pos ) {
					element.find("li").removeClass("on");
					element.find("li").eq(3).addClass("on");
				}
			}
			// 3tabs
			if ( $(".message").length || $(".business").length || $(".environment").length) {
				if ( $(".nav_target").eq(0).offset().top < nav_pos && $(".nav_target").eq(1).offset().top > nav_pos ) {
					element.find("li").removeClass("on");
					element.find("li").eq(0).addClass("on");
				}
				if ( $(".nav_target").eq(1).offset().top < nav_pos && $(".nav_target").eq(2).offset().top > nav_pos  ) {
					element.find("li").removeClass("on");
					element.find("li").eq(1).addClass("on");
				}
				if ( $(".nav_target").eq(2).offset().top < nav_pos ) {
					element.find("li").removeClass("on");
					element.find("li").eq(2).addClass("on");
				}
			}

			// 2tabs
			if ( $(".company").length || $(".data").length ) {
				if ( $(".nav_target").eq(0).offset().top < nav_pos && $(".nav_target").eq(1).offset().top > nav_pos ) {
					element.find("li").removeClass("on");
					element.find("li").eq(0).addClass("on");
				}
				if ( $(".nav_target").eq(1).offset().top < nav_pos ) {
					element.find("li").removeClass("on");
					element.find("li").eq(1).addClass("on");
				}
			}

			
			if ( (nav_pos + nav_h - 60) > $("#footer").offset().top ) {
				element.addClass("faded");
			}else{
				element.removeClass("faded");
			}
	    });	
  }
  
  if ($('#entry_form').length) {
  $(window).load(function () {
    var str = window.location.search; 
    var n = str.search("mode");  
    if(n>=0){
        var p = $('#entry_form').offset();
                if($(window).width() > 640){
                    $('html,body').animate({ scrollTop: p.top -$('#header').outerHeight() - 10}, 400);
                }
                else {
                    $('html,body').animate({ scrollTop: p.top -$('#header').outerHeight() - 10}, 400);
                }
    }
});
    
  }

});
