$(document).ready(function () {
	"use strict";
	$('a[href^="#"]').not('#totop').click(function () {
		if ($($(this).attr('href')).length) {
			var p = $($(this).attr('href')).offset();
			if ($(window).width() > 750) {
				$('html,body').animate({
					scrollTop: p.top - $('#header').outerHeight() - 10
				}, 600);
			} else {
				$('.menu_icon').removeClass('active');
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
			if ($(window).width() > 750) {
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
	$('.over').mouseenter(function () {
		if ($(this).hasClass('flag')) {
			return false;
		} else {
			$(this).find('.submenu').stop().slideDown();
		}
	});
	$('.over').mouseleave(function () {
		if ($(this).hasClass('flag')) {
			return false;
		} else {
			$(this).find('.submenu').stop().slideUp();
		}
	});
	$('.menu_icon').click(function () {
		$(this).toggleClass('active');
		$('#gnavi').stop().fadeToggle('fast');
		$('.submenu').stop().slideUp();
		$('.over').removeClass('active');
		$('body').toggleClass('noscroll');
	});
	$('.over').click(function () {
		if ($(this).hasClass('flag')) {
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
		var Hhead = $('#mainvisual').outerHeight();
		var top = $(this).scrollTop();
		if (top > Hhead) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
		if (vW > 750) {
			$('body').removeClass('noscroll');
			$('.menu_icon').removeClass('active');
			$('.over').removeClass('flag');
			$('#gnavi').removeAttr('style');
		} else {
			$('.over').addClass('flag');
		}

	});
});

$(document).ready(function () {
	"use strict";
	if ($('.qa').length) {
		$('.qa dl dt').click(function () {
			$(this).parent().stop().toggleClass('active');
			$(this).parent().find('dd').stop().slideToggle();
			$(this).toggleClass('activated');
		});
	}
	if ($('#ttl_ct').length) {
		$(window).load(function () {
			var str = window.location.search;
			var n = str.search("mode");
			if (n >= 0) {
				var p = $('#ttl_ct').offset();
				if ($(window).width() > 750) {
					$('html,body').animate({
						scrollTop: p.top - $('#header').outerHeight() - 10
					}, 400);
				} else {
					$('html,body').animate({
						scrollTop: p.top - $('#header').outerHeight() - 10
					}, 400);
				}
			}
		});
	}
	if ($('.case_detail_img').length) {
		$('.case_detail_img').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: true,
			dots: false,
			asNavFor: '.case_detail_thumb'
		});
		$('.case_detail_thumb').slick({
			slidesToShow: 8,
			slidesToScroll: 8,
			asNavFor: '.case_detail_img',
			dots: false,
			arrows: false,
			focusOnSelect: true,
			responsive: [
				{
					breakpoint: 751,
					settings: {
						slidesToShow: 5,
						slidesToScroll: 5,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					}
				}
			]
		});
	}
});
