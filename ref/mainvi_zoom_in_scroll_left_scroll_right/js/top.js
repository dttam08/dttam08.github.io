$(document).ready(function () {
  "use strict";
  $('.main-slide').slick({
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    pauseOnFocus: false,
    focusOnSelect: true,
  });

  $('.main-slide .slick-slide:first-child .slider-detail').addClass('effect');
  $('.main-slide').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.main-slide .slick-slide:nth-child(' + (nextSlide + 1) + ') .slider-detail').addClass('effect');
  });
  $('.main-slide').on('afterChange', function (event, slick, currentSlide) {
    var number = currentSlide;
    if (number === 0) {
      number = $('.main-slide .slick-slide').length;
    }
    $('.main-slide .slick-slide:nth-child(' + number + ') .slider-detail').removeClass('effect');
  });

  var height = window.innerHeight ? window.innerHeight : $(window).height();
  $('.main-slide .slider-detail').css({
    height: height - $('#header').outerHeight()
  });
  $(window).resize(function () {
    var height = window.innerHeight ? window.innerHeight : $(window).height();
      $('.main-slide .slider-detail').css({
        height: height - $('#header').outerHeight()
      });
  });

  var x = 0;
  setInterval(function () {
    x -= 1;
    $('.b08-bg').css({
      'background-position': x + 'px' + ' 0'
    });
  }, 50);

  $('.b01-column-scroll').mCustomScrollbar({
    theme: "dark"
  });

  $(".b04-item").click(function () {
    window.location = $(this).find("a").attr("href");
    return false;
  });

  $('.b06-cate li').click(function () {
    var tab_id = $(this).attr('data-tab');

    $('.b06-cate li').removeClass('current');
    $('.b06-main').removeClass('current');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  });

  $.ajax({
    'url': 'property/_custom/?limit=4&cat=1',
    'dataType': 'jsonp',
    'success': function (json) {
      $.each(json.data, function (i, val) {
        var img = "";
        if (val.img1 !== "") {
          img = $(val.img1).attr('src');
        } else {
          img = "images/under_img02.jpg";
        }

        var txt1 = "";
        if (val.txt1 !== "") {
          txt1 = val.txt1;
        } else {
          txt1 = "-";
        }

        var txt4 = "";
        if (val.txt4 !== "") {
          txt4 = val.txt4;
        } else {
          txt4 = "-";
        }

        var $li = $('<div class="b06-item"/>').html(
          '<a href="property/' + val.url + '"><p class="b06-itm-img"><img src="' + img + '" alt="' + val.title + '"></p>'
          + '<div class="b06-itm-info"><ul class="b06-itm-txt"><li><span>物件名</span><span>' + val.title + '</span></li>'
          + '<li><span>所在地</span><span>' + txt1 + '</span></li>'
          + '<li><span>価格</span><span>' + txt4 + '</span></li></ul><p class="b06-itm-btn">詳しくみる</p></div></a></div>'
        );

          $li.appendTo('#cate-1 .b06-list');
      });
    }
  });

  $.ajax({
    'url': 'property/_custom/?limit=4&cat=2',
    'dataType': 'jsonp',
    'success': function (json) {
      $.each(json.data, function (i, val) {
        var img = "";
        if (val.img1 !== "") {
          img = $(val.img1).attr('src');
        } else {
          img = "images/under_img02.jpg";
        }

        var txt1 = "";
        if (val.txt1 !== "") {
          txt1 = val.txt1;
        } else {
          txt1 = "-";
        }

        var txt4 = "";
        if (val.txt4 !== "") {
          txt4 = val.txt4;
        } else {
          txt4 = "-";
        }

        var $li = $('<div class="b06-item"/>').html(
          '<a href="property/' + val.url + '"><p class="b06-itm-img"><img src="' + img + '" alt="' + val.title + '"></p>'
          + '<div class="b06-itm-info"><ul class="b06-itm-txt"><li><span>物件名</span><span>' + val.title + '</span></li>'
          + '<li><span>所在地</span><span>' + txt1 + '</span></li>'
          + '<li><span>価格</span><span>' + txt4 + '</span></li></ul><p class="b06-itm-btn">詳しくみる</p></div></a></div>'
        );

          $li.appendTo('#cate-2 .b06-list');
      });
    }
  });

  $.ajax({
    'url': 'property/_custom/?limit=4&cat=3',
    'dataType': 'jsonp',
    'success': function (json) {
      $.each(json.data, function (i, val) {
        var img = "";
        if (val.img1 !== "") {
          img = $(val.img1).attr('src');
        } else {
          img = "images/under_img02.jpg";
        }

        var txt1 = "";
        if (val.txt1 !== "") {
          txt1 = val.txt1;
        } else {
          txt1 = "-";
        }

        var txt4 = "";
        if (val.txt4 !== "") {
          txt4 = val.txt4;
        } else {
          txt4 = "-";
        }

        var $li = $('<div class="b06-item"/>').html(
          '<a href="property/' + val.url + '"><p class="b06-itm-img"><img src="' + img + '" alt="' + val.title + '"></p>'
          + '<div class="b06-itm-info"><ul class="b06-itm-txt"><li><span>物件名</span><span>' + val.title + '</span></li>'
          + '<li><span>所在地</span><span>' + txt1 + '</span></li>'
          + '<li><span>価格</span><span>' + txt4 + '</span></li></ul><p class="b06-itm-btn">詳しくみる</p></div></a></div>'
        );

          $li.appendTo('#cate-3 .b06-list');
      });
    }
  });

  $.ajax({
    'url': 'property/_custom/?limit=4&cat=4',
    'dataType': 'jsonp',
    'success': function (json) {
      $.each(json.data, function (i, val) {
        var img = "";
        if (val.img1 !== "") {
          img = $(val.img1).attr('src');
        } else {
          img = "images/under_img02.jpg";
        }

        var txt1 = "";
        if (val.txt1 !== "") {
          txt1 = val.txt1;
        } else {
          txt1 = "-";
        }

        var txt4 = "";
        if (val.txt4 !== "") {
          txt4 = val.txt4;
        } else {
          txt4 = "-";
        }

        var $li = $('<div class="b06-item"/>').html(
          '<a href="property/' + val.url + '"><p class="b06-itm-img"><img src="' + img + '" alt="' + val.title + '"></p>'
          + '<div class="b06-itm-info"><ul class="b06-itm-txt"><li><span>物件名</span><span>' + val.title + '</span></li>'
          + '<li><span>所在地</span><span>' + txt1 + '</span></li>'
          + '<li><span>価格</span><span>' + txt4 + '</span></li></ul><p class="b06-itm-btn">詳しくみる</p></div></a></div>'
        );

          $li.appendTo('#cate-4 .b06-list');
      });
    }
  });

  $.ajax({
    'url': 'property/_custom/?limit=4&cat=5',
    'dataType': 'jsonp',
    'success': function (json) {
      $.each(json.data, function (i, val) {
        var img = "";
        if (val.img1 !== "") {
          img = $(val.img1).attr('src');
        } else {
          img = "images/under_img02.jpg";
        }

        var txt1 = "";
        if (val.txt1 !== "") {
          txt1 = val.txt1;
        } else {
          txt1 = "-";
        }

        var txt4 = "";
        if (val.txt4 !== "") {
          txt4 = val.txt4;
        } else {
          txt4 = "-";
        }

        var $li = $('<div class="b06-item"/>').html(
          '<a href="property/' + val.url + '"><p class="b06-itm-img"><img src="' + img + '" alt="' + val.title + '"></p>'
          + '<div class="b06-itm-info"><ul class="b06-itm-txt"><li><span>物件名</span><span>' + val.title + '</span></li>'
          + '<li><span>所在地</span><span>' + txt1 + '</span></li>'
          + '<li><span>価格</span><span>' + txt4 + '</span></li></ul><p class="b06-itm-btn">詳しくみる</p></div></a></div>'
        );

          $li.appendTo('#cate-5 .b06-list');
      });
    }
  });

  $.ajax({
    'url': 'column/_custom/',
    'dataType': 'jsonp',
    'success': function (json) {
      $.each(json.data, function (i, val) {
        var $li = $('<li/>').html(
          '<a href="column/' + val.url + '"><span class="b01-column-date">' + val.date.replace(/\//g, '.') + '</span><span class="b01-column-ttl">' + val.title + '</span></a>'
        );

        $li.appendTo('.b01-column-list');
      });
    }
  });

});
