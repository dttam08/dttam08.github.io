// JavaScript Document
$(function () {
	"use strict";
	var obj = {
		init: function () {
			this.toTop();
			this.smoothScroll();
			this.iconMenu();
			this.tabList();
			this.openTab();
			this.question();
			this.compare();
			this.fixParallaxIE();
			this.underSlide();
			this.slideTour();
			this.fixed();
			this.checkShow();
		},
		//totop
		checkShow: function () {
			const list = $(".udr-check li label");
			const img = $(".udr_tour-show");
			let id = 0;
			$(".true-0").addClass("show");
			if (list) {
				$(list).each(function (index) {
					$(this).on("change", function () {
						if ($(this).find("input").is(":checked")) {
							id = id + 1;
							$(this).addClass("active");
						} else {
							$(this).removeClass("active");
							id = id - 1;
						}
						$("[class*='true-']").removeClass("show");
						if (id > 0 && id <= 3) {
							$(".true-1").addClass("show");
						} else if (id == 4 || id == 5) {
							$(".true-2").addClass("show");
						} else if (id >= 6) {
							$(".true-3").addClass("show");
						}
						if (id == null || id == 0) {
							$("[class*='true-']").removeClass("show");
							$(".true-0").addClass("show");
						}
					});
				});
			}
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
		fixed: function () {
			$(window).on("scroll load", function () {
				if ($(this).scrollTop() > 200) {
					$("header").addClass("scroll");
				} else {
					$("header").removeClass("scroll");
				}
				if ($(this).width() <= 750) {
					if ($(this).scrollTop() > 100) {
						$(".fixed-social").addClass("active");
					} else {
						$(".fixed-social").removeClass("active");
					}
				}
			});
		},
		slideTour: function () {
			const list = $(".udr_tour-list dl");
			const img = $(".udr_tour-show");

			if (list) {
				$(list).each(function (index) {
					list.first().trigger("click");
					$(this).on("click", function () {
						$(list).removeClass("active");
						$(img).find("li").removeClass("active");
						$(this).toggleClass("active");
						$(img).find("li").eq(index).addClass("active");
					});
				});
			}
		},
		//smoothScroll
		smoothScroll: function () {
			$('a[href^="#"]')
				.not(".box02-tab a")
				.click(function () {
					if ($($(this).attr("href")).length) {
						var p = $($(this).attr("href")).offset();
						if ($(window).width() > 640) {
							$("html,body").animate(
								{
									scrollTop: p.top - 115,
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
								scrollTop: top01 - 115,
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
			$(".hicon").click(function () {
				$(".hamburger").toggleClass("active");
				$(".hnavi").toggleClass("active");
			});

			//butn closes
			$(".icon_menu.closes").click(function () {
				$(".icon_menu.closes").toggleClass("active");
				$(".icon_menu.open").fadeIn();
				$("#gnavi").slideToggle();
				$("#gnavi .sub").removeAttr("style");
				$(".gnavi_pc > li > label").removeClass("active");
			});

			$(".gnavi > li.has span").click(function () {
				$(this).toggleClass("active");
				$(this).next(".gnavi-lv2").slideToggle();
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
		tabList: function () {
			$(".udr_tab01 li").on("click", function () {
				$(".udr_tab01 li").removeClass("active");
				$(".tab_content .tab_it").removeClass("active");
				var id = $(this).attr("data-tab");
				$(this).addClass("active");
				$("#" + id).addClass("active");
			});
			$(".udr_tab02 li").on("click", function () {
				$(".udr_tab02 li").removeClass("active");
				$(".tab_content02 .tab_it").removeClass("active");
				var id = $(this).attr("data-tab");
				$(this).addClass("active");
				$("#" + id).addClass("active");
			});
			$(".udr_tab03 li").on("click", function () {
				$(".udr_tab03 li").removeClass("active");
				$(".tab_content03 .tab_it").removeClass("active");
				var id = $(this).attr("data-tab");
				$(this).addClass("active");
				$("#" + id).addClass("active");
			});
		},
		openTab: function () {
			$(".udr_btn_detail").on("click", function () {
				$(this).toggleClass("open");
				var id = $(this).attr("data-content-hide");
				$(id).slideToggle();
			});
		},
		question: function () {
			$(document).ready(function () {
				$(".qa dt").click(function () {
					$(this).parent().stop().toggleClass("active");
					$(this).stop().toggleClass("activated");
				});
			});
		},
		compare: function () {
			$(window).load(function () {
				"use strict";
				$(".slide-compare").twentytwenty();
				$("body").addClass("loaded");
			});
		},
		fixParallaxIE: function () {
			if (navigator.userAgent.match(/Trident\/7\./)) {
				$("body").on("mousewheel", function () {
					event.preventDefault();
					var wheelDelta = event.wheelDelta;
					var currentScrollPosition = window.pageYOffset;
					window.scrollTo(0, currentScrollPosition - wheelDelta);
				});
			}
		},
		underSlide: function () {
			if ($("#product_info_thumb").length > 0) {
				$("#product_info_thumb").slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					asNavFor: "#product_info_nav",
					infinite: true,
					accesibility: false,
					draggable: false,
					swipe: false,
					touchMove: false,
				});
				$("#product_info_nav").slick({
					slidesToShow: 4,
					slidesToScroll: 1,
					asNavFor: "#product_info_thumb",
					dots: false,
					focusOnSelect: true,
					infinite: true,
					responsive: [
						{
							breakpoint: 769,
							settings: {
								slidesToShow: 4,
								slidesToScroll: 1,
							},
						},
						{
							breakpoint: 751,
							settings: {
								slidesToShow: 4,
								slidesToScroll: 1,
							},
						},
					],
				});
			}
		},
	};

	obj.init();
});
