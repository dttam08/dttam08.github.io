// JavaScript Document
$(function() {
    "use strict";
    var ojbect = {
        init: function() {
            this.mvs();
            this.blog();
        },
        //tenfunction : function(){},
        mvs: function() {
            if ($(".mvs_slider")) {
                $('.mvs_slider').slick({
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true,
                    autoplay: true,
                    autoplaySpeed: 1500,
                    responsive: [{
                        breakpoint: 750,
                        settings: {
                            slidesToShow: 1,
                        }
                    }, ]
                });
            }
            new WOW().init();
        },
        blog: function() {
            $.ajax({
                'url': 'blog/_custom/?limit=3',
                'dataType': 'jsonp',
                'success': function(json) {
                    $.each(json.data, function(i, val) {;
                        if (val.title.length > 20) {
                            var txt = val.title.substr(0, 20) + "...";
                        } else {
                            txt = val.title.substr(0, 20);
                        }
                        var $li = $('<li/>').html(
                            '<span class="num">' + val.date.substr(0, 4) + '.' + val.date.substr(5, 2) + '.' + val.date.substr(8, 2) + '</span><a href="blog/' + val.url + '" class="txt">' + txt + '</a>');
                        $li.appendTo('.box03 .box03_news');
                    });
                }
            });
        },
    };
    ojbect.init();
});