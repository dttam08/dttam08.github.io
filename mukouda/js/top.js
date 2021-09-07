// JavaScript Document
$(function() {
    "use strict";
    var obj = {
        init: function() {
            this.setAnimate();
            this.idxSlide();
            this.loadPost();
            this.hoverChangeImg();
        },
        idxSlide: function() {
            if ($('.idx_mv').length > 0) {
                $('.idx_mv').slick({
                    dots: false,
                    infinite: true,
                    speed: 2000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    arrows: false,
                    centerMode: false,
                    centerPadding: 0,
                    pauseOnHover: false,
                    fade: true,
                    variableWidth: false,
                });
            }
            $(window).on("load scroll", function() {
                $('.idx_mv_ttl, .idx_mv_ttl01').each(function() {
                    var pscroll = $(window).scrollTop();
                    var elemPos = $(this).offset().top;
                    var heightWindow = window.innerHeight ? window.innerHeight : $(window).height();
                    if (pscroll >= elemPos - heightWindow) {
                        $('.idx_mv_ttl').addClass('animated');
                        $('.idx_mv_ttl01').addClass('animated');

                    }
                });
            });


        },
        setAnimate: function() {
            var wow = new WOW({
                boxClass: 'wow', // default
                animateClass: 'animated', // default
                offset: 0, // default
                mobile: false, // default
                live: true // default
            });
            wow.init();
        },
        loadPost: function() {
            $('#idx_b01_tab_cts').slick({
                asNavFor: '#idx_b01_tab_link',
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
                fade: true,
                infinite: true,
            });
            $('#idx_b01_tab_link').slick({
                asNavFor: '#idx_b01_tab_cts',
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
                infinite: true,
                focusOnSelect: true
            });

            // //NEWS
            $.ajax({
                url: 'column/_custom/?limit=3&cat=1',
                dataType: 'jsonp',
                success: function(json) {
                    $.each(json.data, function(i, val) {
                        var ttl = val.title;
                        ttl = ttl.length < 45 ? ttl : ttl.substr(0, 45) + '...';
                        var html = '<li><p class="date_cate"><span class="date">' + convertDate(val.date) + '</span><span class="cate cate0' + val.category_id + '">' + val.category_name + '</span></p><a href="column/' + val.url + '" class="ttl">' + ttl + '</a></li>';
                        $('.idx_b01_posts_item.i01 .tab_ct').append(html);
                    });
                }
            });
            // //BLOG
            $.ajax({
                url: 'column/_custom/?limit=3&cat=2',
                dataType: 'jsonp',
                success: function(json) {
                    $.each(json.data, function(i, val) {
                        var ttl = val.title;
                        ttl = ttl.length < 45 ? ttl : ttl.substr(0, 45) + '...';
                        var html = '<li><p class="date_cate"><span class="date">' + convertDate(val.date) + '</span><span class="cate cate0' + val.category_id + '">' + val.category_name + '</span></p><a href="column/' + val.url + '" class="ttl">' + ttl + '</a></li>';
                        $('.idx_b01_posts_item.i02 .tab_ct').append(html);
                    });
                }
            });

            function convertDate(stringDate) {
                var arr = stringDate.split('/');
                var fullDate = arr[0] + '.' + arr[1] + '.' + arr[2];
                return fullDate;
            }
            // //WORKS
            $.ajax({
                'url': 'works/_custom/',
                'dataType': 'jsonp',
                'success': function(json) {
                    $.each(json.data, function(i, val) {
                        // console.log(json.data)
                        var ttl = val.title;
                        ttl = ttl.length < 45 ? ttl : ttl.substr(0, 45) + '...';
                        var thumb = val.img01 ? $(val.img01).attr('src') : 'images/idx_b04_img.jpg';
                        var cate = val.txt02 ? '<p class="cate"><span>' + val.txt02 + '</span></p>' : '';
                        var item = $('<li class="idx_b04_item"><a  href="works/' + val.url + '"><p class="img"><img src="' + thumb + '" alt="' + ttl + '"></p>' + cate + '<p class="ttl">' + ttl + '</p><p class="link"><span>詳しく見る</span></p></a></li>');
                        item.appendTo(".idx_b04_slide");
                    });
                    if ($(".idx_b04_slide").length) {
                        if ($(".idx_b04_slide .idx_b04_item").length < 5) {
	                        var sum = 5 - $(".idx_b04_slide .idx_b04_item").length;
	                        for(var i=1; i <= sum; i++) {
	                        	$(".idx_b04_slide .idx_b04_item:nth-child("+ i +")").clone().appendTo('.idx_b04_slide');
	                        }
                        }

                        $('.idx_b04_slide').slick({
                            autoplay: true,
                            autoplaySpeed: 2000,
                            slidesToShow: 5,
                            slidesToScroll: 1,
                            cssEase: 'linear',
                            infinite: true,
                            centerMode: true,
                            variableWidth: true,
                            dots: false,
                            arrow: false,
                            responsive: [{
                                    breakpoint: 1650,
                                    settings: {
                                        slidesToShow: 3,
                                        variableWidth: false,
                                    }
                                },
                                {
                                    breakpoint: 751,
                                    settings: {
                                        slidesToShow: 3,
                                        variableWidth: false,
                                    }
                                },
                                {
                                    breakpoint: 641,
                                    settings: {
                                        slidesToShow: 2,
                                        variableWidth: false,

                                    }
                                },
                                {
                                    breakpoint: 476,
                                    settings: {
                                        slidesToShow: 1,
                                        variableWidth: false,

                                    }
                                },

                            ]
                        });
                    }

                }
            });
        },
        hoverChangeImg: function() {
            $(window).bind("load", function() {
                var vW = $(window).width();
                if (vW > 640) {
                    $('.idx_b02_slide_nav li').removeClass('flag');
                } else {
                    $(".idx_b02_slide_nav_item.i01").addClass('active');
                    $('.idx_b02_slide_nav li').addClass('flag');
                }
            });
            var vw = $(window).width();
            if (vw > 640) {
                $('.idx_b02_slide_nav li').mouseenter(function() {
                    var data = $(this).attr('data-img');
                    if ($(this).hasClass('flag')) {
                        return false;
                    } else {
                        $('.idx_b02_img_item').removeClass('active');
                        $('.idx_b02_slide_nav li').removeClass('active');
                        $(this).addClass('active');
                        $(this).parentsUntil("idx_b02_slide_thumb").find('.idx_b02_img_item.i' + data).toggleClass('active');
                    }
                });

                $('.idx_b02_slide_nav li').mouseleave(function() {
                    var data = $(this).attr('data-img');
                    if ($(this).hasClass('flag')) {
                        return false;
                    } else {
                        $(this).parentsUntil("idx_b02_slide_thumb").find('.idx_b02_img_item.i' + data).removeClass('active');
                        $(this).parentsUntil("idx_b02_slide_thumb").find('.idx_b02_img_item.i01').addClass('active');
                        $(this).removeClass('active');
                    }
                });
            } else {
                $('.idx_b02_slide_nav li').click(function() {
                    if ($(this).hasClass('flag')) {
                        var data = $(this).attr('data-img');
                        $('.idx_b02_img_item').removeClass('active');
                        $('.idx_b02_slide_nav li').removeClass('active');
                        $(this).addClass('active');
                        $(this).parentsUntil("idx_b02_slide_thumb").find('.idx_b02_img_item.i' + data).addClass('active');
                    }

                });
            }
        },
    };

    obj.init();

});