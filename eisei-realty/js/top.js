$(function () {
  "use strict";
  var obj = {
    init: function () {
      this.TopJS();
    },

    TopJS: function () {
      $('.idx-main-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
      });
      $('.b06-list').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
      });
      
			$.ajax({
			'url' : 'column/_custom/?limit=3',
			'dataType' : 'jsonp',
			'success' : function(json){
				$.each(json.data, function(i,val){
					var newsttl = val.title.length < 100 ? val.title : val.title.substr(0,100)+'...';
					var img = "";
						if(val.img1 !== ""){
							img = $(val.img1).attr('src');
						}else {
							img = "images/under_img01.jpg";
						}
					var $li_ind = $('<li class="wow fadeInUp"/>').html(
					'<a href="column/'+ val.url +'"><p class="b08-itm-img"><img src="' + img + '" alt="'+ val.title +'" ></p>' + 
						'<div class="b08-itm-main"><p class="b08-itm-date">' + val.date + '</p><p class="b08-itm-ttl">' + newsttl + '</p>' + 
					'<p class="b08-itm-btn">MORE</p></div></a>'
					);
					$li_ind.appendTo('.b08-list');
          
				});
      $('.b08-list').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 641,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
			} 
			});

    },

  };

  obj.init();

});