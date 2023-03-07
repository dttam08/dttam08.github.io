$(function () {
    'use strict';
    var obj = {
        init: function () {
            this.topMV();
    
        },
        topMV: function(){
            var slide = $(".mv_imgs");
			slide.slick({
                dots: true,
                infinite: true,
                speed: 500,
                pauseOnHover: false,
                pauseOnFocuse : false,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay:false,
                autoplaySpeed: 3000,
                arrows:true,
                fade: false,
            });
            slide.on('touchstart', (e) => {
                slide.slick('slickPlay');
            });
        },
    };
    obj.init();
});
