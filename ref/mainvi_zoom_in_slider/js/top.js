
$(function() {

    //link box _blank
	var url = $(this).find("a").attr("href");
	$(".box_bnt01").click(function() {
		window.open(url, '_blank');
	  return false;
    });
    //link box
    $(".box_tb").click(function() {
        window.location = $(this).find("a").attr("href"); 
        return false;
      });
      

});
//youtube
$(window).bind("load resize", function() {
    if($(window).width()<=640){
        var iframeH = $(".youtube iframe").width()*55/100;
        $(".youtube iframe").css("height",iframeH);
    }
    else {
        $(".youtube iframe").css("height","");
    }
});

$(document).ready(function(){
    $.ajax({
        'url': 'news/_custom/?limit=4',
        'dataType': 'jsonp',
        'success': function(json) {
            $.each(json.data, function(i, val) {
                

                var $li = $('<dl/>').html(
                        '<div><a href="news/'+ val.url +'"></a></div>'+
                        '<dt>'+ val.date +'</dt>'+
                        '<dd class="name">'+ val.title +'</dd>'
                    );
                    $li.appendTo('#news_post');

            });
        }
    });
});


var topJs = {
    init: function () {
        this.mainvisual();
    },

    mainvisual: function () {
        var $mvSlider = $('.idx_key .slider');
        $mvSlider.slick({
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 6000,
            speed: 2000,
            slidesToShow: 1,
            fade: true,
            slide: ".slide",
            vertical: false,
            pauseOnFocus: false,
            pauseOnHover: false,
			lazyLoad: true,
        });
    },
}

$(function () {
    topJs.init();
})
