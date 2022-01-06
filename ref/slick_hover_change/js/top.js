// JavaScript Document
$(function () {
            "use strict";
            var ojbect = {
                init: function () {
                    this.slider_main();
                    this.slider_img();
                    this.clickSVG();
                    this.changeResize();
                    this.initAnimate();
                    this.loadBlog();
                },
                
                slider_main: function () {
                    $('.slider_main').slick({
                        autoplay: true,
                        speed: 300,
                        slidesToShow: 1,
                        arrows: false,
                        fade: true,
                        cssEase: 'linear'

                    });

                },
                
                slider_img: function () {
                    $('.slider_img').slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        fade: true,
                        cssEase: 'linear',
                        autoplay: true,
                        arrows: true,
                        accessibility: false,
                        asNavFor: '.slider_dot'

                    });

                    $('.slider_dot').slick({
                        focusOnSelect: true,
                        asNavFor: '.slider_img',
                        dots: false,
                        infinite: false,
                        arrows: false,
                        slidesToShow: 6,
                        slidesToScroll: 1,
                        autoplay: false,
                        cssEase: 'linear',
                        centerMode: false,

                        responsive: [{
                            breakpoint: 770,
                            settings: {
                                infinite: true,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                centerMode: false
                            }
                    }]
                    });

                    $('.slider_dot .slick-slide').removeClass('slick-active');
                    $('.slider_dot .slick-slide').eq(0).addClass('slick-active');

                    $('.slider_img').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                        var mySlideNumber = nextSlide;
                        $('.slider_dot .slick-slide').removeClass('slick-active');
                        $('.slider_dot .slick-slide').eq(mySlideNumber).addClass('slick-active');
                    });
                    
                    //event mouse hover
                     $('.slider_dot .slick-slide').mouseover(function() {                        
                         $(this).click();                         
                    });

                },

                clickSVG: function () {
                    $('.box03 .img_cicle #idx1,.box04 .img_cicle #idx01').click(function () {
                        window.location.href = "treatment/implant.html";
                    });
                    $('.box03 .img_cicle #idx2,.box04 .img_cicle #idx02').click(function () {
                        window.location.href = "treatment/endo.html";

                    });
                    $('.box03 .img_cicle #idx3,.box04 .img_cicle #idx03').click(function () {
                        window.location.href = "treatment/general.html";

                    });
                    $('.box03 .img_cicle #idx4,.box04 .img_cicle #idx04').click(function () {
                        window.location.href = "treatment/whitening.html";

                    });
                    $('.box03 .img_cicle #idx5, .box04 .img_cicle #idx05').click(function () {
                        window.location.href = "treatment/prevent.html";

                    });
                    $('.box03 .img_cicle #idx6,.box04 .img_cicle #idx06').click(function () {
                        window.location.href = "treatment/";
                    })
                },
                changeResize: function () {
                    $(window).bind("resize load scroll", function () {

                                var w = $(window).width();
                                if (w > 768) {
                                    $('#js-parallaxContent section').addClass('js-section');

                                } else {
                                    $('#js-parallaxContent').removeAttr('style');
                                    $('#js-parallaxContent section').removeClass('js-parallaxSection is-active is-fixed js-section');
                                    $('#js-parallaxContent section').removeAttr('style');
                                    $('#js-parallaxContent .grp_txt').removeClass('js-categoryTitle');
                                    $('.slider_dot dd a').attr("href", '#');                                   

                                    }
                                });

                        },
                        initAnimate: function () {
                            $(window).on('load', function () {
                                {
                                    if ($(".wow").length > 0) {
                                        new WOW().init();
                                    }
                                }
                            });
                        },
                        loadBlog: function () {
                            $.ajax({
                                'url': 'blog/_custom/?cat=1&limit=10',
                                'dataType': 'jsonp',
                                'success': function (json) {
                                    $.each(json.data, function (i, val) {
                                        var ttl = val.title.length < 50 ? val.title : val.title.substr(0, 50) + '...';
                                        var $item = $('<li></li>').html(
                                            '<span class="date">' + val.date + '</span>' +
                                            '<span class="cat0' + val.category_id + '">' + val.category_name + '</span>' +
                                            '<p><a href="blog/' + val.url + '">' + ttl + '</a></p>'

                                        );
                                        $item.appendTo('#blog01');
                                    });

                                }
                            });
                            $.ajax({
                                'url': 'blog/_custom/?cat=2&limit=10',
                                'dataType': 'jsonp',
                                'success': function (json) {
                                    $.each(json.data, function (i, val) {
                                        var ttl = val.title.length < 50 ? val.title : val.title.substr(0, 50) + '...';
                                        var $item = $('<li></li>').html(
                                            '<span class="date">' + val.date + '</span>' +
                                            '<span class="cat0' + val.category_id + '">' + val.category_name + '</span>' +
                                            '<p><a href="blog/' + val.url + '">' + ttl + '</a></p>'

                                        );
                                        $item.appendTo('#blog02');
                                    });

                                }
                            });

                        },

                };
                ojbect.init();
            });