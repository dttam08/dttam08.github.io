$(function() {
    "use strict";
    var obj = {
        init: function() {
            this.staffSlide()
        },
        staffSlide: function () {
            if ($('#asd-slick').length > 0) {
                $('#asd-slick').slick({
                    dots: false,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    variableWidth: true,
                    autoplay: true
                });
            }
        },
    };

    obj.init();
});