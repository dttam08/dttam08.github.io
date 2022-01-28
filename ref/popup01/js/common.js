$(function() {
    "use strict";
    var obj = {
        init: function() {
            this.smoothScroll();
            this.anchorScroll();
            this.Gnavi();
            this.toTop();
            this.underWorksSlide();
            this.photoGallery();
            this.setPopUp();
        },
        toTop: function() {
            $("#totop").hide();
            $(window).on("load scroll resize", function() {
                if ($(this).scrollTop() > 50) {
                    var vW = $(window).width();
                    var fCallH = $(".f_call").outerHeight();
                    if (vW < 641) {
                        $('.f_btn_fixed').fadeOut();
                        $("#footer").removeAttr('style');
                        $("#totop").fadeIn();
                        $('.f_call').addClass('show');
                        $("#footer").css("marginBottom", fCallH);
                    } else {
                        $('.f_call').removeAttr('style');
                        $('#totop').fadeOut();
                        $('.f_call').removeClass('show');
                    }
                    $('.f_btn_fixed').addClass('show');
                } else {
                    $("#footer").removeAttr('style');
                    $('#totop').fadeOut();
                    $('.f_btn_fixed').removeClass('show');
                }

            });
        },
        //smoothScroll
        smoothScroll: function() {
            $(window).on("load", function() {
                $('a[href^="#"]').click(function() {
                    var wWidth = $(window).width();
                    if ($($(this).attr("href")).length) {
                        var p = $($(this).attr("href")).offset();

                        $(".menu_icon").removeClass("active");
                        if (wWidth <= 640) {
                            $("html,body").animate({
                                    scrollTop: p.top - 90,
                                },
                                800
                            );
                            $("#gnavi").stop().slideUp();
                        } else {
                            $("#gnavi").removeAttr('style');

                            $('html,body').animate({ scrollTop: p.top - 120 }, 800);
                        }
                    }
                    return false;
                });
            });
        },
        // Anchor scroll
        anchorScroll: function() {
            $(window).on("load", function() {
                var hash1 = location.hash;
                var $root = $("html, body");
                if (hash1 !== "") {
                    var top01 = $(hash1).offset().top;
                    if ($(window).width() > 640) {
                        $root.animate({
                                scrollTop: top01 - 120,
                            },
                            800
                        );
                    } else {
                        $root.animate({
                                scrollTop: top01 - 90,
                            },
                            800
                        );
                    }
                }
            });
        },
        //Gnavi
        Gnavi: function() {
            $('.over').mouseenter(function() {
                if ($(this).hasClass('flag')) {
                    return false;
                } else {
                    $(this).find('.sub_menu').stop().slideDown();
                }
            });
            $('.over').mouseleave(function() {
                if ($(this).hasClass('flag')) {
                    return false;
                } else {
                    $(this).find('.sub_menu').stop().slideUp();
                }
            });
            $('.over a').click(function() {
                let parent = $(this).parent();
                if (parent.hasClass('flag')) {
                    if (parent.hasClass('active')) {
                        parent.removeClass('active');
                        parent.find('.sub_menu').stop().slideUp();
                    } else {
                        parent.removeClass('active');
                        $('.sub_menu').stop().slideUp();
                        parent.find('.sub_menu').stop().slideToggle();
                    }
                }
            });

            $('.menu_icon').click(function() {
                if ($(this).hasClass('active')) {
                    $('.menu_icon').removeClass('active');
                    $('#gnavi').slideUp();
                    $('.sub_menu').stop().slideUp();
                    $('.over').removeClass('active');
                } else {
                    $(this).toggleClass('active');
                    $('#gnavi').stop().slideToggle(300);
                }
            });

            $(window).bind("load", function() {
                var vW = $(window).width();
                if (vW > 640) {
                    $(".menu_icon").removeClass('active')
                    $('.over').removeClass('flag');
                    $('.over').removeClass('active');
                    $("#gnavi").removeAttr('style');

                    $('.sub_menu').removeAttr('style');
                } else {
                    $('.over').addClass('flag');
                }
            });
        },

        underWorksSlide: function() {
            if ($('#works_info_thumb').length > 0) {
                $('#works_info_thumb').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    asNavFor: '#works_info_nav',
                    infinite: true,
                    centerMode: true,
                });
                $('#works_info_nav').slick({
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    asNavFor: '#works_info_thumb',
                    dots: false,
                    focusOnSelect: true,
                    infinite: true,
                    arrows: false,
                    centerMode: true,
                    responsive: [{
                            breakpoint: 769,
                            settings: {
                                slidesToShow: 5,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 751,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 476,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 426,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 321,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            }
                        }
                    ]
                });

            }
        },
        photoGallery: function () {
            $('#com_list_img').slick({
                asNavFor: '#com_list_img_thumb',
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                infinite: true,
                fade:true,
                autoplay: true,
                speed: 1000,
                autoplaySpeed: 3000,
            });
            $('#com_list_img_thumb').slick({
                asNavFor: '#com_list_img',
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: false,
                focusOnSelect: true,
                infinite: true,
                arrows: false,
                vertical:true,
                autoplay:true,
                // variableWidth: true,
                // variableHeight: true,
                responsive: [{
                        breakpoint: 769,
                        settings: {
                            vertical: false,
                            slidesToShow: 5,
                            slidesToScroll: 1,
                            variableWidth: false,
                            variableHeight: false,
                        }
                    },
                    {
                        breakpoint: 751,
                        settings: {
                            vertical: false,
                            slidesToShow: 4,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 476,
                        settings: {
                            vertical: false,
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 426,
                        settings: {
                            vertical: false,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 321,
                        settings: {
                            vertical: false,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }
                ]
            });
        },
        setPopUp : function() {
			if($('.mfp-pop').length > 0){
				$('.mfp-pop').magnificPopup({
					type: 'image',
					fixedContentPos: true,
					mainClass: 'mfp-with-fade',
					removalDelay: 200, 
					closeOnContentClick: true,
					closeBtnInside: false,
					gallery: { enabled:true }
				})
			}

		}
    };

    obj.init();
});