$(function(){
    "use strict";
    var obj = {
        init : function(){
            this.slider();
            this.animation();
            this.photoGallery();
            this.fixParallaxIE();
        },
        slider: function () {
            $('.main_slider').slick({
                dots: false,
                arrows: false,
                fade: true,
                speed: 2000,
                autoplay: true,
                autoplaySpeed: 3000,
                infinite: true,
            });
        },
        animation: function () {
            new WOW().init();
        },
        photoGallery: function () {
            $('#photo_gallery_main').slick({
                asNavFor: '#photo_gallery_thumb',
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
            });
            $('#photo_gallery_thumb').slick({
                asNavFor: '#photo_gallery_main',
                slidesToShow: 5,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
                variableWidth: true,
                variableHeight: true,
                infinite: true,
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 641,
                        settings: {
                            slidesToShow: 3,
                            centerMode: true,
                        }
                    }
                ]
            });
        },
        fixParallaxIE: function () {
            if (navigator.userAgent.match(/Trident\/7\./)) {
                $('body').on("mousewheel", function () {
                    event.preventDefault();
                    var wheelDelta = event.wheelDelta;
                    var currentScrollPosition = window.pageYOffset;
                    window.scrollTo(0, currentScrollPosition - wheelDelta);
                });
            }
        },
    };
    
    obj.init();
});