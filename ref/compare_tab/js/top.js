// JavaScript Document
$(function () {
	"use strict";
	var ojbect = {
		init: function () {
			//this.Ten function();
			this.slide();
			this.tabBlog();
		},
		tabBlog: function () {
			const btn = $(".box02-tab li a");
			const content = $(".box02-content");
			if (btn) {
				$(btn).click(function (e) {
					e.preventDefault();
					const id = $(this).attr("href");
					$(".box02-blog").removeClass("active");
					content.find(id).addClass("active");
					console.log();
				});
			}
			new WOW().init();
		},
		slide: function () {
			const slide = $(".box03-list");
			if (slide) {
				$(slide)
					.not(".slick-initialized")
					.slick({
						dots: true,
						infinite: true,
						speed: 300,
						slidesToShow: 1,
						mobileFirst: true,
						centerMode: true,
						centerPadding: "40px",
						responsive: [
							{
								breakpoint: 750,
								settings: "unslick",
							},
							{
								breakpoint: 425,
								settings: {
									centerPadding: "20px",
								},
							},
						],
					});
			}
		},
	};
	ojbect.init();
});
