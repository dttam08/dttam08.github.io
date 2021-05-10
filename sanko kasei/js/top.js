$(function () {
	"use strict";
	var ojbect = {
		init: function () {
			this.slider();
			this.animation();
		},
		slider: function () {
			$('.slide_list').slick({
				dots: false,
				autoplay: true,
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				pauseOnHover: false,
				autoplaySpeed: 4000,
				infinite: true,
				speed: 800,
				touchMove: false,
				fade: true
			});
		},
		animation: function () {
			$(window).on('load', function () {
				new WOW().init();
			});
		}
	};
	ojbect.init();
});