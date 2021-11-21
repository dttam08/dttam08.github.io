$(function () {
  "use strict";
  var obj = {
    init: function () {
      this.smoothScroll();
      this.toTop();
      this.Gnavi();
    },

    smoothScroll: function () {
      $('a[href^="#"]').click(function () {
        if ($($(this).attr('href')).length) {
          var p = $($(this).attr('href')).offset();
          if ($(window).width() > 640) {
            $('html,body').animate({
              scrollTop: p.top - 119
            }, 600);
          } else {
            $('html,body').animate({
              scrollTop: p.top - 80
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
              scrollTop: top01 - 119
            }, 600);
          } else {
            $root.animate({
              scrollTop: top01 - 80
            }, 600);
          }
        }
      });

    },

    toTop: function () {
      $("#totop, .f-call").hide();
      $(window).scroll(function () {
        var vW = $(window).width();
        if ($(this).scrollTop() > 100) {
          $('#totop').fadeIn();
          if (vW < 641) {
            $('.f-call').fadeIn();
          } else {
            $('.f-call').stop().fadeOut();
          }
        } else {
          $('#totop').stop().fadeOut();
          $('.f-call').stop().fadeOut();
        }
      });
    },

    Gnavi: function () {
      $('.over').mouseenter(function () {
        if ($(this).hasClass('flag')) {
          return false;
        } else {
          $(this).find('.submenu').stop().slideDown();
        }
      });
      $('.over').mouseleave(function () {
        if ($(this).hasClass('flag')) {
          return false;
        } else {
          $(this).find('.submenu').stop().slideUp();
        }
      });
      $('.menu-icon').click(function () {
        $(this).toggleClass('active');
        $('.f02-menu').stop().fadeToggle('fast');
        $('.over').removeClass('active');
      });
      $('.close-menu').click(function () {
        $('.menu-icon').removeClass('active');
        $('.f02-menu').fadeOut('fast');
        $('.over').removeClass('active');
      });
      $('.over').click(function () {
        if ($(this).hasClass('flag')) {
          if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.submenu').stop().slideUp();
          } else {
            $('.over').removeClass('active');
            $('.submenu').stop().slideUp();
            $(this).addClass('active');
            $(this).find('.submenu').stop().slideDown();
          }
        }
      });
      $(window).bind("load resize scroll", function () {
        var Hhead = $('#mainvisual').outerHeight() + $('#header').outerHeight();
        var top = $(this).scrollTop();
        var widthWin = $(window).width();
        if (widthWin > 640) {
          $('.menu-icon').removeClass('active');
          $('.f02-menu').removeAttr('style');
          $('.over').removeClass('flag');
          if (top > Hhead) {
            $('#gnavi').addClass('fixed');
            $('#mainvisual').css('margin-bottom', 109);
          } else {
            $('#gnavi').removeClass('fixed');
            $('#mainvisual').removeAttr('style');
          }
        } else {
          $('.over').addClass('flag');
          $('#gnavi').removeClass('fixed');
          $('#mainvisual').removeAttr('style');
        }

      });

    },

  };

  obj.init();

});
