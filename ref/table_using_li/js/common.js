// JavaScript Document
$(function () {
	"use strict";
	var obj = {
		init: function () {
			this.toTop();
			this.smoothScroll();
			this.iconMenu();
		},
		//totop
		toTop: function () {
			$("#totop").hide();
			$(window).scroll(function () {
				if ($(this).scrollTop() > 100) {
					$("#totop").fadeIn();
				} else {
					$("#totop").fadeOut();
				}
			});
			$("#totop a").click(function () {
				$("body,html").animate(
					{
						scrollTop: 0,
					},
					500
				);
				return false;
			});
		},
		//smoothScroll
		smoothScroll: function () {
			$('a[href^="#"]').click(function () {
				if ($($(this).attr("href")).length) {
					var p = $($(this).attr("href")).offset();
					if ($(window).width() > 640) {
						$("html,body").animate(
							{
								scrollTop: p.top - 135,
							},
							600
						);
					} else {
						$("html,body").animate(
							{
								scrollTop: p.top - 100,
							},
							600
						);
					}
				}
				return false;
			});
			$(window).load(function () {
				var hash1 = location.hash;
				var $root = $("html, body");
				if (hash1 !== "") {
					var top01 = $(hash1).offset().top;
					if ($(window).width() > 640) {
						$root.animate(
							{
								scrollTop: top01 - 135,
							},
							600
						);
					} else {
						$root.animate(
							{
								scrollTop: top01 - 100,
							},
							600
						);
					}
				}
			});
		},

		//sp gnavi
		iconMenu: function () {
			$(".icon_menu.open").click(function () {
				$(".icon_menu.closes").toggleClass("active");
				$(".icon_menu.open").fadeOut();
				$("#gnavi").slideToggle();
			});

			//butn closes
			$(".icon_menu.closes").click(function () {
				$(".icon_menu.closes").toggleClass("active");
				$(".icon_menu.open").fadeIn();
				$("#gnavi").slideToggle();
				$("#gnavi .sub").removeAttr("style");
				$(".gnavi_pc > li > label").removeClass("active");
			});

			$("#gnavi .has > label").click(function () {
				$(this).toggleClass("active");
				$(this).next(".sub").slideToggle();
			});
			//last close
			$("#gnavi #close").click(function () {
				$("#gnavi").slideUp(600);
				$(".icon_menu").removeClass("active");
				$("#gnavi .sub").removeAttr("style");
				$("#gnavi .has > label").removeClass("active");
			});

			$(window).bind("load resize", function () {
				var w = $(window).width();
				$(".has > label").removeClass("active");

				if (w > 640) {
					$(".sub").removeAttr("style");
					$("#gnavi .has > label").removeClass("active");
					$(".icon_menu").removeClass("active");
					$("#gnavi").removeAttr("style");
				} else {
					$("#gnavi .has > label").removeClass("active");
				}
			});
		},
	};

	obj.init();
});
