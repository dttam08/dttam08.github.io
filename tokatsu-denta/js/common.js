// JavaScript Document
$(function () {
    "use strict";
    var obj = {
        init: function () {
            this.toTop();
			this.smoothScroll();
			this.iconMenu();
			this.fixMenu();
        },
        //sp gnavi
		iconMenu: function () {
			$(".hamburger-lines").click(function () {
				$(".hamburger-lines").toggleClass("active");
				$(".header-nav-container").toggleClass("active");
				$("body").toggleClass("ov-h");
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
        fixMenu: function () {
			var head = $("header").offset().top;
			$(window).bind("load scroll", function () {
				if ($(window).width() > 750) {
					if ($(this).scrollTop() > head) {
						$("header").addClass("active");
					} else {
						$("header").removeClass("active");
					}
				}
			});
		},
		//totop
		toTop: function () {
			$("#totop").hide();
			$(window).scroll(function () {
				if ($(this).scrollTop() > 100) {
					$("#totop").fadeIn();
					$(".actionToSite").addClass("show");
				} else {
					$(".actionToSite").removeClass("show");
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
					if ($(window).width() > 750) {
						$("html,body").animate(
							{
								scrollTop: p.top - 135,
							},
							600
						);
					} else {
						$("html,body").animate(
							{
								scrollTop: p.top - 90,
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
					if ($(window).width() > 750) {
						$root.animate(
							{
								scrollTop: top01 - 135,
							},
							600
						);
					} else {
						$root.animate(
							{
								scrollTop: top01 - 90,
							},
							600
						);
					}
				}
			});
		},
    };

    obj.init();
});
/*Stop scroll content on mobile when click open menu*/
$(document).ready(function () {
    (function () {
        var _overlay = document.getElementById('header-gnavi');
        var _clientY = null; 
        _overlay.addEventListener('touchstart', function (event) {
            if (event.targetTouches.length === 1) {
                _clientY = event.targetTouches[0].clientY;
            }
        }, false);

        _overlay.addEventListener('touchmove', function (event) {
            if (event.targetTouches.length === 1) {
                disableRubberBand(event);
            }
        }, false);

        function disableRubberBand(event) {
            var clientY = event.targetTouches[0].clientY - _clientY;
            if (_overlay.scrollTop === 0 && clientY > 0) {
                event.preventDefault();
            }
            if (isOverlayTotallyScrolled() && clientY < 0) {
                event.preventDefault();
            }
        }

        function isOverlayTotallyScrolled() {
            return _overlay.scrollHeight - _overlay.scrollTop <= _overlay.clientHeight;
        }
    }())
});
