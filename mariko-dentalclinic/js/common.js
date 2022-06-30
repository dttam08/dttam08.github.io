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
        if(!$(this).parent().hasClass('idx-btn-skip')) {
          var vW = $(window).width();
          $('.menu-icon').removeClass('active');
          if (vW <= 640) {
            $('#gnavi').fadeOut('fast');
          }
          if ($($(this).attr('href')).length) {
            var p = $($(this).attr('href')).offset();
            if ($(window).width() > 640) {
              $('html,body').animate({
                scrollTop: p.top - 30
              }, 600);
            } else {
              $('html,body').animate({
                scrollTop: p.top - 90
              }, 600);
            }
          }
          return false;
        }
        
      });
      $(window).load(function () {
        var hash1 = location.hash;
        var $root = $('html, body');
        if (hash1 !== "") {
          var top01 = $(hash1).offset().top;
          if ($(window).width() > 640) {
            $root.animate({
              scrollTop: top01 - 30
            }, 600);
          } else {
            $root.animate({
              scrollTop: top01 - 90
            }, 600);
          }
        }
      });

    },

    toTop: function () {
      $("#totop").hide();
      $(window).scroll(function () {
        var vW = $(window).width();
        if ($(this).scrollTop() > 100) {
          $('#totop').fadeIn();
          if (vW < 641) {
            $('.f_call').addClass('show');
          } else {
            $('.f_call').removeClass('show');
          }
        } else {
          $('#totop').fadeOut();
          $('.f_call').removeClass('show');
        }
      });
    },

    Gnavi: function () {
      $('.over').click(function () {
        if ($(this).hasClass('flag')) {
          if ($(this).hasClass('active')) {
            $(this).removeClass('active');
          } else {
            $('.submenu').stop().slideUp();
            $(this).addClass('active');
            $(this).find('.submenu').stop().slideToggle();
          }
        }
      });
      $('.menu-icon').click(function () {
        if ($(this).hasClass('active')) {
          $('.menu-icon').removeClass('active');
          $('#gnavi').stop().fadeOut('fast');

        } else {
          $(this).toggleClass('active');
          $('#gnavi').stop().fadeToggle(300);
        }
      });
      $('.menu-close').click(function () {
        $('.menu-icon').removeClass('active');
        $('#gnavi').stop().fadeOut('fast');

      })
      $(window).bind("load resize scroll", function () {
        var Hhead = $("#header").outerHeight();
        var top = $(this).scrollTop();
        if (top > Hhead) {
          //					$("#header").addClass('fixed');
          $(".h-nav").addClass('trans');
        } else {
          $(".h-nav").removeClass('trans');
          //					$("#header").removeClass('fixed');
        }

      });
      $(window).on('resize load scroll', function () {
        var vW = $(window).width();
        var pTop = $(window).scrollTop();
        var fCallH = $(".f_call").outerHeight();
        if (vW <= 640) {
          if (pTop > 0) {
            $("#footer").css("marginBottom", fCallH);
          } else {
            $("#footer").css("marginBottom", '');
          }
        } else {
          $("#footer").removeAttr('style');
        }
      });
    },
  };

  obj.init();

});
