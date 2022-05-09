$(document).ready(function () {
  "use strict";
  $(window).load(function () {
    
  $('.main_num').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    asNavFor: '.main_dots',
    nextArrow: $('.main_btn .main_dots_btn')
  });
  $('.main_dots').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    autoplay: true,
    asNavFor: '.main_num',
    dots: false,
    focusOnSelect: true
  });
  
  $('.main_num').css({
    'transform': 'rotate(0deg)'
  });
  $('.main_num').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var prev = currentSlide + 1,
      next = nextSlide + 1,
      total = next - prev,
      prev_deg = $('.main_num').attr('style').match(/[-+]?[0-9]*\.?[0-9]+/),
      prev_deg_l = parseInt(prev_deg) + 120,
      prev_deg_r = parseInt(prev_deg) - 120,
      prev_deg_m = parseInt(prev_deg) + 240;
    if ((total == 1) || (total == -3)) {
      $('.main_num, .main_img').css({
        'transform': 'rotate(' + prev_deg_l + 'deg)'
      });
    } else if ((total == -1) || (total == 3)) {
      $('.main_num, .main_img').css({
        'transform': 'rotate(' + prev_deg_r + 'deg)'
      });
    } else {
      $('.main_num, .main_img').css({
        'transform': 'rotate(' + prev_deg_m + 'deg)'
      });
    }
  });

  });
  
  
  $('.b01_tab_item').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.b01_tab_item').removeClass('current');
		$('.b01_main_list').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
  
  $('.b03_list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    pauseOnFocus: false,
    pauseOnHover: false,
    autoplay: false,
    arrows: true,
    asNavFor: '.b03_dots',
    nextArrow: $('.b03_num .main_dots_btn'),
    prevArrow: $('.b03_num .main_dots_btn.prev')
  });
  $('.b03_dots').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    asNavFor: '.b03_list',
    dots: false,
    autoplay: true,
    variableWidth: true,
    autoplaySpeed: 5000,
    focusOnSelect: true,
    arrows: false,
    responsive: [
    {
      breakpoint: 751,
      settings: {
        variableWidth: false,
      }
    }
  ]
  });
  $.ajax({
    'url' : 'info/_custom/?limit=3',
    'dataType' : 'jsonp',
    'success' : function(json){
      $.each(json.data, function(i,val){
        var cat_id = val.category_id;
        if(cat_id !== "2"){
          var $li_intern = $('<li/>').html(
          '<a href="info/'+ val.url +'"><span class="b01_intern_date">' + val.date.replace(/\//g, '.') + '</span><span class="b01_intern_ttl">' + val.title + '</span></a>'
          );
          $li_intern.appendTo('.b01_intern');
        }
        
      });
    } 
  });
  $.ajax({
    'url' : 'info/_custom/?limit=3',
    'dataType' : 'jsonp',
    'success' : function(json){
      $.each(json.data, function(i,val){
        var cat_id = val.category_id;
        var img = "";
        if(val.event_img !== ""){
          img = $(val.event_img).attr('src');
        }else {
          img = "images/under_img01.jpg";
        }
        if(cat_id == "1") {
          var $li_event = $('<li/>').html(
          '<a href="info/'+ val.url +'"><p class="b01_event_img"><img src="'+img+'" alt="'+val.title+'"></p>'+
            '<div class="b01_event_main"><p class="b01_event_info"><span class="b01_event_info_ttl">開催日</span>' + val.date.replace(/\//g, '.') + '<span class="b01_event_info_ttl">時間</span>' + val.event_txt01 + '</p><p class="b01_event_info"><span class="b01_event_info_ttl">会場</span><span class="b01_event_info_txt">' + val.event_txt02 + '</span></p></div></a>'
          );
          $li_event.appendTo('.b01_event');          
        }
        
      });
    } 
  });
  
  var $win = $(window);
  var position01 = $('.box04').offset().top - ($win.height() / 3 * 2);
  var flag01 = null;
  
  $win.scroll(function () {
      if ($(this).scrollTop() > position01 && flag01 === null) {
        flag01 = 5;
        //繧ｫ繧ｦ繝ｳ繝医い繝��
        var countElm1 = $('.b04_item .count'),
          countSpeed1 = 20;

        countElm1.each(function () {
          var self = $(this),
            countMax = self.attr('data-num'),
            thisCount = self.text(),
            countTimer;

          function timer() {
            countTimer = setInterval(function () {
              var countNext = thisCount++;
              self.text(countNext);

              if (countNext == countMax) {
                clearInterval(countTimer);
              }
            }, countSpeed1);
          }
          timer();
        });
      }
  });
  
});