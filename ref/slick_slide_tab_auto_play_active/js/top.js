$(window).load(function () {
    "use strict";
    var obj = {
        init: function () {
            this.slider();
            this.animation();
        },
        slider: function () {
            $('.box02_blog').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                dots:false,
                autoplaySpeed: 4500,
                infinite:true,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                        variableWidth: true,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        slidesToShow: 1
                    }
                }
                ]
            });
            var main_slider = $('.idx_slide').slick({
                dots: false,
                infinite: true,
                // speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1000,
                arrows: false,
                centerMode: false,
                centerPadding: 0,
                pauseOnHover: false,
                fade: true,
                variableWidth: false,
            });
            $('.idx_list_sl li .stt').click(function(e){
                 e.preventDefault();
                 var index = $(this).parent().index();
                $(".idx_list_sl li").removeClass("active");
                $(this).parent().toggleClass("active");
                $(".idx_slide").slick("slickGoTo", index);
            });
            main_slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
                // $(".idx_list_sl li").removeClass("active");
                // $(this).parent().toggleClass("active");
                console.log(nextSlide); 
                var nextslide = nextSlide + 1;
                $(".idx_list_sl li").removeClass("active");
                $('.idx_list_sl li:nth-child('+ nextslide +')').toggleClass('active');
          });
            // $('.idx_list_sl').slick({
            //     slidesToShow: 4,
            //     slidesToScroll: 1,
            //     asNavFor: '.idx_slide',
            //     dots: false,
            //     autoplay:false,
            //     arrows: false,
            //     centerMode: false,
            //     infinite: true,
            // });
        },
        animation: function () {
            if ($(".wow").length > 0) {
                new WOW().init();
            }
        },
    };

    obj.init();
});
