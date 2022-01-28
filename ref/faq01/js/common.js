$(function () {
    "use strict";
    var obj = {
        init: function () {
            this.toTop();
            this.smoothScroll();
            this.gnavi();
            this.setLightbox();
            this.faq();
            this.tab();
        },
        toTop: function () {
            $("#totop").hide();
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $('#totop').fadeIn();
                } else {
                    $('#totop').fadeOut();
                }
            });
            $('#totop a').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 500);
                return false;
            });
        },
        smoothScroll: function () {
            $('a[href^="#"]').click(function () {
                if ($($(this).attr('href')).length) {
                    var p = $($(this).attr('href')).offset();
                    if ($(window).width() > 640) {
                        $('html,body').animate({
                            scrollTop: p.top - 135
                        }, 600);
                    } else {
                        $('html,body').animate({
                            scrollTop: p.top - 100
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
                    if ($(window).width() > 640) {
                        $root.animate({
                            scrollTop: top01 - 135
                        }, 600);
                    } else {
                        $root.animate({
                            scrollTop: top01 - 100
                        }, 600);
                    }
                }
            });
        },
        gnavi: function () {
            $('.over').mouseenter(function () {
				if (!$('.over').hasClass('flag')) {
					$(this).find('.submenu').stop().slideDown();
				}
			}).mouseleave(function () {
				if (!$('.over').hasClass('flag')) {
					$(this).find('.submenu').stop().slideUp();
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
                $('#gnavi').toggleClass('active');
                $('.submenu').slideUp();
            });

            $(window).scroll(function () {
                if ($(this).width() > 640) {
                    if ($(this).scrollTop() > 200) {
                        $('#header').addClass('active')
                    } else {
                        $('#header').removeClass('active');
                    }
                }
            });

            $(window).on('load resize', function () {
                $('#header').removeClass('active');
                $('#gnavi, .icon_menu').removeClass('active');
                $('.submenu').removeAttr('style');
                if ($(this).width() > 750) {
                    $('#gnavi .over').removeClass('flag');
                } else {
                    $('#gnavi .over').addClass('flag');
                }
            });
        },
        
        
        setLightbox : function() {
			if($(".mfp-pop").length){
                $('.mfp-pop').magnificPopup({
                    type: 'image',
                    fixedContentPos: true,
                    alignTop:false,
                    mainClass: 'mfp-with-fade',
                    removalDelay: 200,
                    closeOnContentClick: true,
                    closeBtnInside: false,
                    gallery: { enabled:true }
                })
            }

		},
        faq:function(){
			if($('.under_qa').length) {
				$('.under_qa dt').each(function() {
					$(this).click(function() {
						$(this).next().slideToggle();
						$(this).toggleClass('active');
					});
				});
			}
		},
        tab: function () {
            $('.tab_link').click(function () {
                let data = $(this).attr('data-tab');
        
                $('.tab_link').removeClass('active');
                $(this).addClass('active');
        
                $('.tab_content').removeClass('active');
                $('#reason' + data).addClass('active');
            });
        },

    };

    obj.init();
});