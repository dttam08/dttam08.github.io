$(function () {
    "use strict";
    var obj = {
        init: function () {
            this.smoothScroll();
            this.anchorScroll();
            this.Gnavi();
            this.toTop();
            this.setSameHeightItem();
            this.faq();
            this.initAnimate();
            this.setPositionFmailText();
            this.popup();
        },
        toTop: function () {
            $("#totop").hide();
            $(window).on("load scroll",function () {
                if ($(this).scrollTop() > 50) {
               
					$('#totop').fadeIn();
                   	$('.h_btn.flag').addClass('show');
				} else {
                    $("#footer").removeAttr('style');
					$('#totop').fadeOut();
					$('.h_btn.flag').removeClass('show');
				}
         
            });
        },
        //smoothScroll
        smoothScroll : function(){
            $(window).on('load', function(){
            $('a[href^="#"]').click(function(){
                var wWidth = $(window).width();
                    if ($( $(this).attr('href')).length ) {
                        var p = $( $(this).attr('href') ).offset();
                        if(wWidth <= 640){
                            $('#gnavi').removeClass('open');
                            $('.over').removeClass('active');
                            $('.sub_menu').stop().slideUp();
                            $('.menu_icon').removeClass('active');
                            $('html,body').animate({ scrollTop: p.top - 90}, 500);
                            
                        } else {
                            $('html,body').animate({ scrollTop: p.top - 100}, 500);
                            
                        }
                    }
                return false;
            });
            })
        },
        // Anchor scroll
        anchorScroll : function(){
            $(window).on('load',function () {
                var hash1 = location.hash;
                var $root = $('html, body');
                if (hash1 !== "") {
                    var top01 = $(hash1).offset().top;
                    if ($(window).width() > 640) {
                        $root.animate({
                            scrollTop: top01 - 100
                        }, 600);
                      
                    } else {
                        $root.animate({
                            scrollTop: top01 - 90
                        }, 600);
                    }
                }
            });
        },
        //Gnavi
        Gnavi: function () {
            $('.over').mouseenter(function(){
				if($(this).hasClass('flag')){
					return false;
				} else {
					$(this).find('.sub_menu').stop().fadeIn();
				}
			});
			$('.over').mouseleave(function(){
				if($(this).hasClass('flag')){
					return false;
				} else {
					$(this).find('.sub_menu').stop().fadeOut();
				}
            });
            $('.over').click(function(){
				if($(this).hasClass('flag')){
					if($(this).hasClass('active')){
						$('.sub_menu').stop().slideUp();
                        $(this).removeClass('active');
              
					} else {
						$('.over').removeClass('active');
                        $('.sub_menu').stop().slideUp();
                   
						$(this).addClass('active');
						$(this).find('.sub_menu').stop().slideToggle();
					}
				}
			});
            $('.menu_icon').click(function () {
                if ($(this).hasClass('active')) {
                    $('.menu_icon').removeClass('active');
                    $('#gnavi').removeClass('open');
                    $('.over').removeClass('active');
                    $("body").removeClass("fixed");
                    $('.sub_menu').stop().slideUp();
                } else {
                    $(this).toggleClass('active');
                    $("body").addClass("fixed");
                    $('#gnavi').toggleClass('open');
                }
            });
            $(window).on('resize load scroll', function () {
                var vW = $(window).width();
                var pTop = $(window).scrollTop();
                var hHeaderPC = $("#mainvisual").outerHeight() - 100;
                var hHeaderSP = $("#header").outerHeight();
                if(vW > 640){
                    if(pTop >  hHeaderPC){
                        $("#header").addClass("fixed");
                        $(".idx_mv_info").addClass("fixed");
                    }
                    else{
                        $("#header").removeClass("fixed");
                        $(".idx_mv_info").removeClass("fixed");
                    }
                }
                else{
                    if(pTop >  hHeaderSP){
                        $("#header").addClass("fixed");
                    }
                    else{
                        $("#header").removeClass("fixed");
                    }
                }
            });
            $(window).on('resize load scroll', function () {
                var vW = $(window).width();
                var pTop = $(window).scrollTop();
                var hBtn = $(".h_btn").outerHeight();
                if(vW <= 640){
                    if(pTop > 0){
                        $("#footer").css("marginBottom", hBtn);
                    }
                    else{
                        $("#footer").css("marginBottom", '');
                    }
                }
                else{
                  $("#footer").removeAttr('style');
                }
            });
           
            $(window).bind("load resize", function() {
                var vW = $(window).width();
                if (vW > 640) {
                    $('.over').removeClass('flag');
                    $('.h_btn').removeClass('flag');
                    $('.over').removeClass('active');
                    $('.sub_menu').removeAttr('style');
                    $('body').removeClass('fixed');
                } else {
                    $('.over').addClass('flag');
                    $('.h_btn').addClass('flag');
                }
                
            });
        },
        //set same height item
        setSameHeightItem:function(){
			$(window).on("load resize", function(){
                if($(".info_list_news_ttl .ttl").length > 0){
                    $(".info_list_news_ttl .ttl").matchHeight();
                }
            })
               
		},
        //under faq
        faq: function() {
            if ($('.under_qa').length) {
                $('.under_qa dt').each(function() {
                    $(this).click(function() {
                        $(this).next().slideToggle();
                        $(this).toggleClass('active');
                    });
                });
            }
        },
        //init animate
        initAnimate:function(){
			$(window).load(function(){
				if ($(".wow").length > 0) {
                    new WOW().init();
                }
			})
		},
        setPositionFmailText:function(){
            $(window).on('load resize', function () {
                var screenWidth = window.innerWidth ? window.innerWidth : $(window).width();
				$('table.mailform tr th').each(function(){  
                    if($(this).find("div").hasClass("fmail_must")){
                        if(screenWidth > 640){
                            // if( $(this).find('span.name').has('br').length > 0)
                            // {
                            //     $(this).find(".fmail_must").css({
                            //           "top":"-29px"
                            //     }) 
                            // }
                            $(this).find("span.name").css({
                                "position": "relative",
                                "top": '8px'
                            });
                          
                        }
                        else{
                            $(this).find("span.name").removeAttr('style');
                        }
                  
                    }  
				})
                
            });
        },
        popup: function() {
            var groups = {};
            if($(".under_lbox").length){
                $('.under_boxImg li a').each(function() {
                    var id = parseInt($(this).attr('data-group'), 10);
                    if (!groups[id]) {
                        groups[id] = [];
                    }
    
                    groups[id].push(this);
                });
    
                $.each(groups, function() {
                    $(this).magnificPopup({
                        type: 'image',
                        fixedContentPos: true,
                        alignTop: false,
                        mainClass: 'mfp-with-fade',
                        removalDelay: 200, //delay removal by X to allow out-animation
                        closeOnContentClick: true,
                        closeBtnInside: false,
                        gallery: { enabled: true }
                    })
                });
                $('.mfp-pop').magnificPopup({
                    type: 'iframe',
                    fixedContentPos: true
                })
            }
           
        }
        
    };

    obj.init();

});