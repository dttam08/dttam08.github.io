$(document).ready(function () {
  "use strict";
  $('a[href^="#"]').not('#totop').click(function () {
    if ($($(this).attr('href')).length) {
      var p = $($(this).attr('href')).offset();
      if ($(window).width() > 750) {
        $('html,body').animate({
          scrollTop: p.top - 123
        }, 600);
      } else {
        $('.menu-icon').removeClass('active');
        $('#gnavi').fadeOut('fast');
        $('.submenu').stop().slideUp();
        $('.over').removeClass('active');
        $('html,body').animate({
          scrollTop: p.top - 72
        }, 600);
      }
    }
    return false;
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
  
  $(window).bind("load resize scroll", function () {
    var vW = $(window).width();
    var HCall = $('.f_call').outerHeight() + 20;
    if (vW > 750) {
      $('.f_call, #footer').removeAttr('style');
    } else {
      $('#footer').css('margin-bottom',HCall);
    }
  });
});


$(document).ready(function () {
  "use strict";
  $('.b01_list').slick({
    slidesToShow: 2,
    arrows: false,
    fade: false,
    speed: 300,
    autoplay: true,
    responsive: [
    {
      breakpoint: 751,
      settings: {
        slidesToShow: 1,
        arrows: true,
      }
    }
  ]
  });
  $('.b04_list').slick({
    slidesToShow: 4,
    arrows: false,
    fade: false,
    speed: 300,
    autoplay: true,
    responsive: [
    {
      breakpoint: 751,
      settings: {
        slidesToShow: 1,
        arrows: true,
        centerMode: true,
        variableWidth: true
      }
    }
  ]
  });
  $('.b02_list').slick({
    slidesToShow: 3,
    arrows: false,
    fade: false,
    speed: 300,
    autoplay: true,
    responsive: [
    {
      breakpoint: 751,
      settings: {
        slidesToShow: 1,
        arrows: true,
        centerMode: true,
        variableWidth: true
      }
    }
  ]
  });
  $('.b06_list').slick({
    slidesToShow: 2,
    arrows: false,
    fade: false,
    speed: 300,
    autoplay: true,
    responsive: [
    {
      breakpoint: 751,
      settings: {
        slidesToShow: 1,
        arrows: true,
      }
    }
  ]
  });
    $("#mainvisual h2 > span").lettering();
    setTimeout(function(){
      $("#mainvisual").addClass('show');
    }, 500); 
    
});
