$(document).ready(function () {
  "use strict";
  $('a[href^="#"]').not('#totop').click(function () {
    if ($($(this).attr('href')).length) {
      var p = $($(this).attr('href')).offset();
      if ($(window).width() > 768) {
        $('html,body').animate({
          scrollTop: p.top - 84
        }, 600);
      } else {
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
      if ($(window).width() > 768) {
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
  $('.menu_icon').click(function () {
    $('#gnavi').addClass('show');
    $('body').addClass('noscroll');
  });
  $('.close_icon').click(function () {
    $('#gnavi').removeClass('show');
    $('body').removeClass('noscroll');
  });
  $(window).resize(function () {
    $('#gnavi.show .gnavi>ul > li').css('transition','none');
  });
  
  $(window).load(function () {
    $('#mainvisual').addClass('show');
  });
});
