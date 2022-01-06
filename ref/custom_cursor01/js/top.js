// JavaScript Document
$(function () {
    "use strict";
    var ojbect = {
        init: function () {
            this.idx_slider();
            this.initWow();
            this.idx_blog();
            this.idx_bnr();
            this.clickpoup();

        },
        idx_slider: function () {
            var windowWidth = window.innerWidth ? window.innerWidth : $(window).width();

            var scrollSpeed = 1;
            var posX = 50;
            setInterval(function () {
                posX -= scrollSpeed;
                $('.idx_slider').css("background-position", posX + "px 0px");
            }, 50);

            //add scroll bar
            $('.box_scroll').mCustomScrollbar();

        },
        initWow: function () {
            if ($(".wow").length > 0) {
                new WOW().init();
            }
        },
        idx_blog: function () {
            $.ajax({
                'url': 'info/_custom/?cat=1&limit=4',
                'dataType': 'jsonp',
                'success': function (json) {
                    $.each(json.data, function (i, val) {


                        var $item = $('<li></li>').html(
                            '<span>' + val.date.substr(0, 4) + '<i>年</i>' + val.date.substr(6, 1) + '<i>月</i>' + val.date.substr(8, 2) + '<i>日</i></span>' +
                            '<p><a href="info/' + val.url + '">' + val.title + '</a></p>' +

                            '</a>'

                        );
                        $item.appendTo('.cat1');
                    });

                }

            });
            $.ajax({
                'url': 'info/_custom/?cat=2&limit=4',
                'dataType': 'jsonp',
                'success': function (json) {
                    $.each(json.data, function (i, val) {


                        var $item = $('<li></li>').html(
                            '<span>' + val.date.substr(0, 4) + '<i>年</i>' + val.date.substr(6, 1) + '<i>月</i>' + val.date.substr(8, 2) + '<i>日</i></span>' +
                            '<p><a href="info/' + val.url + '">' + val.title + '</a></p>' +

                            '</a>'

                        );
                        $item.appendTo('.cat2');
                    });

                }

            });
            $.ajax({
                'url': 'info/_custom/?cat=3&limit=4',
                'dataType': 'jsonp',
                'success': function (json) {
                    $.each(json.data, function (i, val) {


                        var $item = $('<li></li>').html(
                            '<span>' + val.date.substr(0, 4) + '<i>年</i>' + val.date.substr(6, 1) + '<i>月</i>' + val.date.substr(8, 2) + '<i>日</i></span>' +
                            '<p><a href="info/' + val.url + '">' + val.title + '</a></p>' +

                            '</a>'

                        );
                        $item.appendTo('.cat3');
                    });

                }

            });
        },


        idx_bnr: function () {
            $('.idx_bnr').slick({
                autoplay: true,
                autoplaySpeed: 0,
                speed: 5500,
                arrows: false,
                cssEase: 'linear',
                infinite: true,
                touchMove: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                variableWidth: true,
                centerMode: true,
                responsive: [
                    {
                        breakpoint: 641,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1,
                            centerMode: false,
                            variableWidth: false,
                        }
                   }]
            });
        },

        clickpoup: function () {
            $('.idx_img01 .idx_btn').click(function () {
                $(this).next('.model_popup').fadeIn();
            });
            $('.modal_close').click(function () {
                $('.model_popup').removeAttr('style');
            });

        },
    };
    ojbect.init();
});


$(window).load(function() {
    $('body').addClass('loaded');
});