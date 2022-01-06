$(function(){
    "use strict";
    var obj = {
        init : function(){
            this.slider();
            this.animation();
            this.photoGallery();
            this.getPost();
        },
        slider: function () {
            $('.main_slider')
            .on('init', function() {
                if ($('.main_slider li').length > 1) {
                    $('.main_slider .slick-slide[data-slick-index="0"]').addClass('moving');
                }
            })
            .slick({
                autoplay: true,
                speed: 1000,
                autoplaySpeed: 3000,
                pauseOnFocus: false,
                pauseOnHover: false,
                draggable: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
                infinite: true,
                fade: true
            })
            .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
                if ($('.main_slider li').length > 1) {
                    var slide_num = $('.main_slider li').length;

                    $('.main_slider li[data-slick-index="' + (currentSlide - 1) + '"]').removeClass('moving');
                    $('.main_slider li[data-slick-index="' + nextSlide + '"]').addClass('moving');

                    if (currentSlide == 0) {
                        $('.main_slider li[data-slick-index="' + (slide_num - 1) + '"]').removeClass('moving');
                    }
                }
            });
        },
        animation: function () {
            new WOW().init();
            
            $(window).on('load resize', function () {
                if ($(this).width() > 640) {
                    $('.box04 .box_tech').mCustomScrollbar('destroy');
                } else {
                    $('.box04 .box_tech').mCustomScrollbar({
                        axis: "x",
                        mouseWheel:{ enable: false }
                    });
                }
            });

            $(window).load(function() {
                $('body').addClass('loaded');
                setTimeout(function(){
					$('body').addClass('show_header');
				}, 2000);
            });
        },
        photoGallery: function () {
            $('.gallery_main').slick({
                asNavFor: '.gallery_thumb',
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                autoplay: true,
                speed: 1000,
                autoplaySpeed: 3000,
            });
            $('.gallery_thumb').slick({
                asNavFor: '.gallery_main',
                slidesToShow: 5,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
                variableWidth: true,
                variableHeight: true,
                infinite: true,
                focusOnSelect: true,
            });
        },
        getPost: function () {
            $.ajax({
                url: 'news/_custom/?limit=6',
                dataType: 'jsonp',
                success: function (json) {
                    $.each(json.data, function (i, val) {
                        var ttl = val.title;
                        ttl = ttl.length < 45 ? ttl : ttl.substr(0, 45) + '...';
                        var html = '<li><span class="date">'+ val.date +'</span><span class="cate cate0'+ val.category_id +'">'+ val.category_name +'</span><a href="news/' + val.url + '" class="ttl">' + ttl + '</a></li>';
                        $('.box_news').mCustomScrollbar();
                        $('.box_news ul').append(html);
                    });
                }
            });
        },
    };
    
    obj.init();
});