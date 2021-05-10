// JavaScript Document
$(function () {
	"use strict";
	var obj = {
		init: function () {
			this.contactJs();
			this.toTop();
			this.smoothScroll();
			this.anchorScroll();
			this.gnavi();
		},
		contactJs:function(){
			$(window).on('load resize', function(){
				$("#d_en1595415057").attr("colspan","2");
				$("#d_en1595468849").attr("colspan","2");
			})
		},
		toTop: function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 100) {
					$(".btn_fixed").addClass('open');
				}
				else {
					$(".btn_fixed").removeClass('open');
				}
			});
			$("#totop a").click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 500);
				return false;
			});
		},
		smoothScroll: function () {
			$('a[href^="#"]').click(function () {
				var wWidth = $(window).width();
				if ($($(this).attr('href')).length) {
					var p = $($(this).attr('href')).offset();
					if (wWidth <= 750) {
						$('html,body').animate({ scrollTop: p.top - 90 }, 500);

					} else {
						$('html,body').animate({ scrollTop: p.top - 20 }, 500);
					}
				}
				return false;
			});
		},
		anchorScroll: function () {
			var wWidth = $(window).width();
			var hash1 = location.hash;
			var $root = $('html, body');
			var top01 = $(hash1).offset();
			if (wWidth <= 750) {
				if (hash1 !== "") {
					$root.animate({ scrollTop: top01.top - 90 }, 500);
				}
			} else {
				if (hash1 !== "") {
					$root.animate({ scrollTop: top01.top - 20 }, 500);
				}
			}
		},
		gnavi: function () {
			$('.over').mouseenter(function () {
				if (!$(this).hasClass('flag')) {
					if ($(window).height() > 920) {
						var posTop = $(this).position().top;
						$(this).find('.submenu').css('top', posTop)
					}
					$(this).find('.submenu').addClass('open');
				}
			});

			$('.over').mouseleave(function () {
				if (!$(this).hasClass('flag')) {
					$(this).find('.submenu').removeClass('open');
				}
			});

			$('.over').click(function () {
				if ($(this).hasClass('flag')) {
					if ($(this).hasClass('active')) {
						$(this).removeClass('active');
						$(this).find('.submenu').stop().slideUp();
					} else {
						$(this).addClass('active');
						$(this).find('.submenu').stop().slideDown();
					}
				}
			});
			
			$('.icon_menu').click(function () {
				$(this).toggleClass('active');
				if ($(this).hasClass('active')) {
					$('#gnavi').addClass('open');
					$('.logo').css({'background-color': 'transparent'});
				} else {
					$('#gnavi').removeClass('open');
					$('.over').removeClass('active');
					$('.submenu').stop().slideUp();
					$('.logo').css({'background-color': 'rgba(240, 240, 240, 0.52)'});
				}
			});

			$(window).bind("load resize", function () {
				var vW = $(window).width();
				var vH = $(window).height();

				$('.icon_menu, .over').removeClass('active');
				$('#gnavi').removeClass('open');

				if (vW > 750) {
					$('.submenu, .logo').removeAttr('style');
					$('.over').removeClass('flag');
				}
				else {
					$('.over').addClass('flag');
					$('.submenu').stop().slideUp();
				}

				if (vW > 750 && vH < 750) {
					$('#header').mCustomScrollbar({theme: "dark"});
				} else {
					$('#header').mCustomScrollbar('destroy');
				}
			});
		}
	};

	obj.init();
});