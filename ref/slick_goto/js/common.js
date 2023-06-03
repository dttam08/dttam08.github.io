// JavaScript Document
$(function () {
	"use strict";
	var obj = {
		init: function () {
			this.toTop();
			this.smoothScroll();
			this.iconMenu();
			this.fixed();
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
			const img = $(".image_l,.image_r");
			if (img) {
				const parnt = img.parent();
				parnt.find("p:last-child").addClass("clearfix");
			}
			const imgtbl = $(".under-table img");
			if (imgtbl) {
				const pImg = imgtbl.parent();
				pImg.addClass("fix-img");
			}
		},
		//smoothScroll
		smoothScroll: function () {
			$('a[href^="#"]').click(function () {
				if ($($(this).attr("href")).length) {
					let pos = $($(this).attr("href")).offset().top;
					loadAnchor(pos);
				}
			});

			$(window).load(function () {
				let hash = location.hash;
				if (hash !== "") {
					let pos = $(hash).offset().top;
					loadAnchor(pos);
				}
			});

			// custom anchor
			$(".fmenu a").click(function () {
				$(".hamburger, .gnavi").removeClass("active");
				$("body").removeClass("block");

				let arrHref = $(this).attr("href").split("#");
				let hash = "#" + arrHref[arrHref.length - 1];
				if (hash !== "") {
					let pos = $(hash).offset().top;
					loadAnchor(pos);
				}
			});

			function loadAnchor(pos) {
				let $root = $("html, body");
				if ($(window).width() > 750) {
					$root.animate(
						{
							scrollTop: pos - 155,
						},
						600
					);
				} else {
					$root.animate(
						{
							scrollTop: pos - 100,
						},
						600
					);
				}
			}
		},
		fixed: function () {
			$(".fixed-social").removeClass("active");
			$(window).on("scroll load resize", function () {
				if ($(this).width() <= 750) {
					if ($(this).scrollTop() > 100) {
						$(".fixed-social").addClass("active");
					} else {
						$(".fixed-social").removeClass("active");
					}
				}
			});
		},
		//sp gnavi
		iconMenu: function () {
			$(".hicon").click(function () {
				$(".hamburger").toggleClass("active");
				$(".gnavi").toggleClass("active");
				$("body").toggleClass("block");
			});

			$(".gnavi .has").click(function () {
				$(this).toggleClass("active");
				$(this).find(".hmenu-lv2").slideToggle();
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
