// JavaScript Document
$(function(){
    "use strict";
     var ojbect= {
         init : function(){
            this.RecruitGnavi();
            this.RecruitToTop();
            this.RecruitSmoothScroll();
            this.RecruitAnchorScroll();
            this.RecruitAnimate();
         },
        //smoothScroll
        RecruitSmoothScroll : function(){
            $(window).on('load', function(){
             $('a[href^="#"]').click(function(){
                 var wWidth = $(window).width();

                     if ($( $(this).attr('href')).length ) {
                         var p = $( $(this).attr('href') ).offset();
                         if(wWidth <= 750){
                             $('#rec_gnavi').fadeOut('fast');
                             $('#rec_gnavi .sub_menu').stop().slideUp();
                             $('#rec_header .menu_icon').removeClass('active');
                             $('html,body').animate({ scrollTop: p.top - 80}, 500);
                             
                         } else {
                             $('html,body').animate({ scrollTop: p.top - 150}, 500);
                         }
                     }
                 return false;
             });
            })
         },
        // Anchor scroll
        RecruitAnchorScroll : function(){
 
                var hash1 = location.hash;
                var $root = $('html, body');
                if (hash1 !== "") {
                    var top01 = $(hash1).offset().top;
                    if ($(window).width() > 640) {
                        $root.animate({
                            scrollTop: top01 - 150
                        }, 600);
                    } else {
                        $root.animate({
                            scrollTop: top01 - 80
                        }, 600);
                    }
                }
         
        },
        RecruitGnavi: function () {
            $('#rec_gnavi .over').mouseenter(function(){
                if($(this).hasClass('flag')){
                    return false;
                } else {
                    $(this).find('.sub_menu').addClass('open');
                }
            });
            $('#rec_gnavi .over').mouseleave(function(){
                if($(this).hasClass('flag')){
                    return false;
                } else {
                    $(this).find('.sub_menu').removeClass('open')
                }
            });
            $('#rec_gnavi .over').click(function(){
                if($(this).hasClass('flag')){
                    if($(this).hasClass('active')){
                        $('#rec_gnavi .sub_menu').stop().slideUp();
                        $(this).removeClass('active');
                    } else {
                        $('#rec_gnavi .over').removeClass('active');
                        $('#rec_gnavi .sub_menu').stop().slideUp();
                        $(this).addClass('active');
                        $(this).find('.sub_menu').stop().slideToggle();
                    }
                }
            });
            $('#rec_header .menu_icon').click(function () {
                if ($(this).hasClass('active')) {
                    $('#rec_header .menu_icon').removeClass('active');
                    $('#rec_gnavi').slideUp();
                    $('#rec_gnavi .sub_menu').stop().slideUp();
                    $('#rec_gnavi .over').removeClass('active');
                } else {
                    $(this).toggleClass('active');
                    $('#rec_gnavi').stop().slideToggle(300);
                }
            });
    

            $(window).on('resize load scroll', function () {
                var vW = $(window).width();
                var pTop = $(this).scrollTop();
                var headerH = $("#rec_header").outerHeight();
                if(pTop > 0){
                    $("#rec_header").addClass("fixed");
                }
                else{
                    $("#rec_header").removeClass("fixed");
                }
                if(vW <= 750){
                    if(pTop > 0){
                        $('#rec_gnavi').css({"top":headerH,"height":"calc(100vh - "+headerH+"px)"});
                    }
                    else{
                        $('#rec_gnavi').css({"top":headerH,"height":"100vh"});
                    }
                }
                else{
                    $('#rec_gnavi').removeAttr('style');
                }
            });
            $(window).bind("load resize", function () {
                var vW = $(window).width();
                if (vW > 750) {
                    $(".menu_icon").removeClass('active')
                    $('#rec_gnavi .over').removeClass('flag');
                    $('#rec_gnavi .over').removeClass('active');
                    $('#rec_gnavi .sub_menu').removeAttr('style');
                    $("#rec_footer").removeAttr('style');

                } else {
                    $('#rec_gnavi .over').addClass('flag');
                }
            });
        
        },
        RecruitToTop: function () {
            $("#rec_totop").hide();
            $(window).on("load scroll",function () {
               
                if ($(this).scrollTop() > 100) {
                    $('#rec_totop').fadeIn();
                    var vW = $(window).width();
                    var fCallH = $(".rec_f_call").outerHeight();
                    if(vW < 751){
                        $('.rec_f_call').addClass('show');
                        $("#rec_footer").css("marginBottom", fCallH )
					}
					else {
                        $('.rec_f_call').removeClass('show');
                        $("#rec_footer ").css("margingBottom", '' )
					}
				} else {
					$('#rec_totop').fadeOut();
					$('.rec_f_call').removeClass('show');
				}
            });
        },
        RecruitAnimate: function () {
            $(window).on("load", function () {
                if ($(".wow").length > 0) {
					new WOW().init();
				}
            });
        },
    };
    ojbect.init();
});