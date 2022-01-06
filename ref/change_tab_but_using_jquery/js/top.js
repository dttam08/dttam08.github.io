$(function () {
    "use strict";
    var obj = {
        init: function () {
            this.slider();
            this.animation();
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


! function ($) {
    $.ajax({
        'url': 'news/_custom/?cat=1&limit=3',
        'dataType': 'jsonp',
        'success': function (json) {
            $.each(json.data, function (i, val) {
                var date_new = new Date(val.date);
                var DATETIME = new Date(val.date);
                var getYear = DATETIME.getFullYear().toString();
                var getMonth = (DATETIME.getMonth() + 1).toString();
                getMonth = getMonth.length < 2 ? '0' + getMonth : getMonth;
                var getDate = DATETIME.getDate().toString();
                getDate = getDate.length < 2 ? '0' + getDate : getDate;
                var set_post_date = getYear + '/' + '' + getMonth + '/' + getDate + '';
                var ttl = val.title;

                var $li = $('<li><span class="cate">' + val.category_name + '</span><span class="date">' + set_post_date + '</span><a href="./news/' + val.url + '" class="txt">' + ttl + '</a></li>')
                $li.appendTo('.news_cate01');
            });
        }
    })
}(jQuery);

! function ($) {
    $.ajax({
        'url': 'news/_custom/?cat=2&limit=3',
        'dataType': 'jsonp',
        'success': function (json) {
            $.each(json.data, function (i, val) {
                var date_new = new Date(val.date);
                var DATETIME = new Date(val.date);
                var getYear = DATETIME.getFullYear().toString();
                var getMonth = (DATETIME.getMonth() + 1).toString();
                getMonth = getMonth.length < 2 ? '0' + getMonth : getMonth;
                var getDate = DATETIME.getDate().toString();
                getDate = getDate.length < 2 ? '0' + getDate : getDate;
                var set_post_date = getYear + '/' + '' + getMonth + '/' + getDate + '';
                var ttl = val.title;

                var $li = $('<li><span class="cate">' + val.category_name + '</span><span class="date">' + set_post_date + '</span><a href="./news/' + val.url + '" class="txt">' + ttl + '</a></li>')
                $li.appendTo('.news_cate02');
            });
        }
    })
}(jQuery);

$(window).load(function() {
    "use strict";
    $(".slide-compare").twentytwenty();
    $('body').addClass('loaded');
});