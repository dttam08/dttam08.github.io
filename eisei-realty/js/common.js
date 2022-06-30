$(function () {
  "use strict";
  var obj = {
    init: function () {
      this.smoothScroll();
      this.toTop();
      this.Gnavi();
    },

    smoothScroll: function () {
      $('a[href^="#"]').not('#totop').click(function () {
        if ($($(this).attr('href')).length) {
          var p = $($(this).attr('href')).offset();
          if ($(window).width() > 640) {
            $('html,body').animate({
              scrollTop: p.top - 84
            }, 600);
          } else {
        $('.menu-icon').removeClass('active');
        $('#gnavi').fadeOut('fast');
        $('.submenu').stop().slideUp();
        $('.over').removeClass('active');
            $('html,body').animate({
              scrollTop: p.top - 95
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
              scrollTop: top01 - 84
            }, 600);
          } else {
            $root.animate({
              scrollTop: top01 - 95
            }, 600);
          }
        }
      });

    },

    toTop: function () {
      $("#totop, .f-fixed, .f_call").hide();
      $(window).scroll(function () {
        var vW = $(window).width();
        if ($(this).scrollTop() > 100) {
          $('#totop').fadeIn();
          if (vW < 641) {
            $('.f-fixed').fadeOut();
            $('.f_call').fadeIn();
          } else {
            $('.f-fixed').fadeIn();
            $('.f_call').fadeOut();
          }
        } else {
          $('#totop').fadeOut();
          $('.f-fixed').fadeOut();
          $('.f_call').fadeOut();
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
        $('#gnavi').stop().fadeToggle('fast');
        $('.submenu').stop().slideUp();
        $('.over').removeClass('active');
          $('.submenu').removeAttr('style');
      });
      $('.close-menu').click(function () {
        $('.menu-icon').removeClass('active');
        $('#gnavi').fadeOut('fast');
        $('.submenu').stop().slideUp();
          $('.submenu').removeAttr('style');
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
        var vW = $(window).width();
        var top = $(this).scrollTop();
        if (vW > 640) {
          $('.menu-icon').removeClass('active');
          $('.over').removeClass('flag');
          $('#gnavi').removeAttr('style');
          if (top > 500) {
            $('#header').addClass('fixed');
          } else {
            $('#header').removeClass('fixed');
          }
        } else {
          $('.over').addClass('flag');
          if (top > 200) {
            $('#header').addClass('fixed');
          } else {
            $('#header').removeClass('fixed');
          }
        }

      });
    },

  };

  obj.init();

});
