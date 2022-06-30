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
              scrollTop: p.top - 140
            }, 500);
          } else {
        $('.menu-icon').removeClass('active');
        $('#gnavi').removeClass('active');
        $('.submenu').stop().slideUp();
        $('.over').removeClass('active');
            $('html,body').animate({
              scrollTop: p.top - 75
            }, 500);
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
              scrollTop: top01 - 140
            }, 500);
          } else {
            $root.animate({
              scrollTop: top01 - 75
            }, 500);
          }
        }
      });

    },

    toTop: function () {
      $("#totop, .f_call").hide();
      $(window).scroll(function () {
        var vW = $(window).width();
        if ($(this).scrollTop() > 100) {
          $('#totop').fadeIn();
          if (vW < 641) {
            $('.f_call').fadeIn();
          } else {
            $('.f_call').fadeOut();
          }
        } else {
          $('#totop').fadeOut();
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
        $('#gnavi').toggleClass('active');
        $('.submenu').stop().slideUp();
        $('.over').removeClass('active');
      });
      $('.close-menu').click(function () {
        $('.menu-icon').removeClass('active');
        $('#gnavi').removeClass('active');
        $('.submenu').stop().slideUp();
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
        if (top > 200) {
          $('#header').addClass('fixed');
        } else {
          $('#header').removeClass('fixed');
        }
        if (vW > 640) {
          $('.menu-icon').removeClass('active');
          $('.over').removeClass('flag');
          $('#gnavi').removeClass('active');
          $('.f_call').fadeOut();
        } else {
          $('.over').addClass('flag');
        }

      });
      
      
    },

  };

  obj.init();

});