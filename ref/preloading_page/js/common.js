$(document).ready(function () {
  "use strict";
  $('a[href^="#"]').not('#totop').click(function () {
    if ($($(this).attr('href')).length) {
      var p = $($(this).attr('href')).offset();
        $('.h_btn_menu').removeClass('active');
        $('#gnavi').fadeOut('fast');
        $('.submenu').stop().slideUp();
        $('.over').removeClass('active');
      $('body').removeClass('noscroll');
      if ($(window).width() > 750) {
        $('html,body').animate({
          scrollTop: p.top - 40
        }, 600);
      } else {
        $('html,body').animate({
          scrollTop: p.top - 130
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
      if ($(window).width() > 750) {
        $root.animate({
          scrollTop: top01 - 40
        }, 600);
      } else {
        $root.animate({
          scrollTop: top01 - 130
        }, 600);
      }
    }
  });
});

$(document).ready(function () {
  "use strict";
  $("#totop, .f_call").hide();
  $(window).scroll(function () {
    var vW = $(window).width();
    if ($(this).scrollTop() > 100) {
      $('#totop').fadeIn();
      if (vW < 751) {
        $('.f_call').fadeIn();
      } else {
        $('.f_call').fadeOut();
      }
    } else {
      $('#totop').fadeOut();
      $('.f_call').fadeOut();
    }
  });
});

$(document).ready(function () {
  "use strict";
  $('.h_btn_menu').click(function () {
    $(this).toggleClass('active');
    $('#gnavi').stop().fadeToggle('fast');
    $('.submenu').stop().slideUp();
    $('.over').removeClass('active');
    $('body').toggleClass('noscroll');
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
    var Hhead = $('#mainvisual').outerHeight();
    var top = $(this).scrollTop();
    if (vW > 750) {
      $('.over').removeClass('flag');
      $('.over').removeClass('active');
      $('.submenu').stop().slideUp();
      if (top > Hhead) {
        $('#header').addClass('fixed');
      } else {
        $('#header').removeClass('fixed');
      }
    } else {
      $('.over').addClass('flag');
      $('#header').removeClass('fixed');
    }

  });
  $(window).bind("load resize", function () {
    var vW = $(window).width();
    if (vW > 750) {
      $('.f_call').fadeOut();
      $('.gnv_btn').insertAfter('.gnv_logo');
      $('.b02_itm01_info').insertBefore('.b02_itm01_main');
    } else {
      $('.gnv_btn').insertAfter('.gnv_menu');
      $('.b02_itm01_info').insertAfter('.b02_itm01_main .idx_h3');
    }

  });
});

