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
              scrollTop: p.top - $('#header').outerHeight() - 10
            }, 600);
          } else {
            $('html,body').animate({
              scrollTop: p.top - $('#header').outerHeight() - 10
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
              scrollTop: top01 - $('#header').outerHeight() - 10
            }, 600);
          } else {
            $root.animate({
              scrollTop: top01 - $('#header').outerHeight() - 10
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
            $('.f-call').fadeOut();
          }
        } else {
          $('#totop').fadeOut();
          $('.f-call').fadeOut();
        }
      });
    },

    Gnavi: function () {
      $('.menu-icon').click(function () {
        $(this).toggleClass('active');
        $('.gnavi').stop().fadeToggle('fast');
        $('.over').removeClass('active');
        if ($(this).hasClass('flagnv')) {
          $('.submenu').stop().slideUp();
        }
      });
      $('.close-menu').click(function () {
        $('.menu-icon').removeClass('active');
        $('.gnavi').fadeOut('fast');
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
        var Hhead = $('#mainvisual').outerHeight() + $('#gnavi').outerHeight();
        var top = $(this).scrollTop();
        if (vW > 640) {
          $('.over').removeClass('flag');
          $('#header').removeClass('fixed');
          if (top > Hhead) {
            $('#header').addClass('fixed');
            $('.gnv-time').appendTo('.h-right');
            $('.gnv-tel').insertAfter('.h-right .gnv-time');
            $('.gnv-cnt').insertAfter('.h-right .gnv-tel');
          } else {
            $('#header').removeClass('fixed');
            $('.gnv-cnt').insertBefore('.gnv-main');
            $('.gnv-time').insertBefore('.gnv-main .gnv-tel');
            $('.gnv-tel').insertBefore('.gnv-btn');
          }
          $('.menu-icon').insertBefore('.gnv-link');
          $('.gnavi').insertAfter('.gnv-link');
          $('.b02-img').insertBefore('.box02 .container');
          $('.menu-icon').removeClass('flagnv');
        } else {
          $('.over').addClass('flag');
          $('.menu-icon').addClass('flagnv');
          $('#header').removeClass('fixed');
          $('.gnavi').removeClass('fixed');
          $('.menu-icon').insertAfter('.logo');
          $('.gnavi').insertAfter('.h-right');
          $('.b02-img').insertAfter('.box01 .container');
        }

      });

    },

  };

  obj.init();

});
