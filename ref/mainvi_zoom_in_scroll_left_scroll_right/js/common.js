$(document).ready(function () {
  "use strict";
  $('a[href^="#"]').not('#totop').click(function () {
    if ($($(this).attr('href')).length) {
      var p = $($(this).attr('href')).offset();
      if ($(window).width() > 640) {
        $('html,body').animate({
          scrollTop: p.top - $('#header').outerHeight() - 10
        }, 600);
      } else {
        $('.menu-icon').removeClass('active');
        $('.f-link-menu').fadeOut('fast');
        $('.f-link-sub').stop().slideUp();
        $('.f-over').removeClass('active');
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
});

$(document).ready(function () {
  "use strict";
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
});

$(document).ready(function () {
  "use strict";
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
    $('.f-link-menu').stop().fadeToggle('fast');
    $('.f-link-sub').stop().slideUp();
    $('.f-over').removeClass('active');
  });
  $('.close-menu').click(function () {
    $('.menu-icon').removeClass('active');
    $('.f-link-menu').fadeOut('fast');
    $('.f-link-sub').stop().slideUp();
    $('.f-over').removeClass('active');
  });
  $('.f-over').click(function () {
    if ($(this).hasClass('flag')) {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.f-link-sub').stop().slideUp();
      } else {
        $('.f-over').removeClass('active');
        $('.f-link-sub').stop().slideUp();
        $(this).addClass('active');
        $(this).find('.f-link-sub').stop().slideDown();
      }
    }
  });
  $(window).bind("load resize scroll", function () {
    var vW = $(window).width();
    if (vW > 640) {
      if ($(this).scrollTop() > 300) {
        $('#header').addClass('fixed');
      } else {
        $('#header').removeClass('fixed');
      }
      $('.menu-icon').removeClass('active');
      $('.f-over').removeClass('flag');
      $('.f-link-menu, .f_call').removeAttr('style');
    } else {
      $('#header').removeClass('fixed');
      $('.f-over').addClass('flag');
    }

  });
  if ($('.under-scroll').length) {
  $('.under-scroll').mCustomScrollbar({
    theme:"dark"
  });
  }
  if ($('.property-img-main').length) {
    $('.property-img-main').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.property-img-thumb'
    });
    $('.property-img-thumb').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.property-img-main',
      dots: false,
      arrows: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 641,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    });
  }
});
