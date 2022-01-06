$(document).ready(function () {
  "use strict";
  $('a[href^="#"]').not('#totop').click(function () {
    if ($($(this).attr('href')).length) {
      var p = $($(this).attr('href')).offset();
      if ($(window).width() > 750) {
        $('html,body').animate({
          scrollTop: p.top
        }, 600);
      } else {
        $('html,body').animate({
          scrollTop: p.top
        }, 600);
      }
    }
    return false;
  });
});

$(document).ready(function () {
  "use strict";
  $('#totop').hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#totop').fadeIn();
    } else {
      $('#totop').fadeOut();
    }
  });
});

$(document).ready(function () {
  "use strict";
  $('.over').mouseenter(function () {
    if ($(this).hasClass('flag')) {
      return false;
    } else {
      $(this).find('.submenu, .h_sub_menu').stop().slideDown();
    }
  });
  $('.over').mouseleave(function () {
    if ($(this).hasClass('flag')) {
      return false;
    } else {
      $(this).find('.submenu, .h_sub_menu').stop().slideUp();
    }
  });
  $('.menu_icon').click(function () {
    $(this).toggleClass('active');
    $('#gnavi').toggleClass('active');
    $('#gnavi').stop().fadeToggle('fast');
  });
  $('.gnv_bg').click(function () {
    $('#gnavi').removeClass('active');
    $('#gnavi').stop().fadeOut('fast');
    $('.menu_icon').removeClass('active');
  })
  $(window).bind("load resize scroll", function () {
    var vW = $(window).width();
    if (vW > 750) {
      $('.over').removeClass('flag');
    } else {
      $('.over').addClass('flag');
    }

  });

});


$(document).ready(function () {
  "use strict";
  if ($('.b02_list').length) {
    $('.b02_list').slick({
      slidesToShow: 4,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToScroll: 4,
      dots: true,
      arrows: false,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });
  }
  if ($('.b03_list').length) {
    var pointText = $('.b03_list').slick({
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        arrows: false,
        centerMode: false,
        centerPadding: 0,
        pauseOnHover: false,
        variableWidth: false,
        draggable: false,
        touchMove: false
    });
    var pointImage = $('.b03_img').slick({
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        arrows: false,
        centerMode: false,
        centerPadding: 0,
        pauseOnHover: false,
        variableWidth: false,
        draggable: false,
        touchMove: false
    });
    var pointCount = $('.count_slide_number').slick({
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        arrows: false,
        centerMode: false,
        centerPadding: 0,
        pauseOnHover: false,
        variableWidth: false,
        draggable: false,
        fade: true,
        touchMove: false
    });
    var numCount = $('.b03_num').slick({
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        arrows: false,
        centerMode: false,
        centerPadding: 0,
        pauseOnHover: false,
        variableWidth: false,
        draggable: false,
        touchMove: false
    });
    $('#prev_slide').click(function() {
        pointText.slick('slickPrev');
        pointImage.slick('slickPrev');
        pointCount.slick('slickPrev');
        numCount.slick('slickPrev');
    });
    $('#next_slide').click(function() {
        pointText.slick('slickNext');
        pointImage.slick('slickNext');
        pointCount.slick('slickNext');
        numCount.slick('slickNext');
    });
    
    
  }
  if ($('.box07').length) {
    $('.b07_tab_item').click(function () {
      var tab_id = $(this).attr('data-tab');

      $('.b07_tab_item').removeClass('current');
      $('.b07_main_info').removeClass('current');

      $(this).addClass('current');
      $("#" + tab_id).addClass('current');
    })
  }
  $('#fullpage').fullpage({
    navigationTooltips: ['「つくる」の現場から、世界を変える。','イーリバースドットコムから「リバスタ」へ','「つくる」の現場から、世界を変える。', 'ニュース', '新たなプラットフォームの創出','「つくる」の現場から、世界を変える。','代表挨拶','お問い合わせ','フッター'],
    css3: true,
    scrollingSpeed: 1000,
    navigation: true,
    slidesNavigation: true,
    responsiveHeight: 330,
    dragAndMove: true,
    scrollHorizontally: false
	});
});
