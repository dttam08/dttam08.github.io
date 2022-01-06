// Scroll to fmail when screen error, confirm, thanks
$(document).ready(function(){
    $(window).on('load', function(){
        var pos = $(this).width() > 641 ? 50 : 100;
        var txtsearch = window.location.search;
        if (txtsearch.indexOf('mode') == 1) {
            $('html, body').animate({
                scrollTop: $('.box_ttl5').offset().top - pos
            }, 600);
        }
    });
});


// FAQ
$(document).ready(function () {
    $('.under_qa_collapse dt').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('active');
    })
});


// GALLERY
$(document).ready(function () {
    if ($('.under_gallery_slide').length) {
        $('.under_gallery_slide').slick({
            asNavFor: '.under_gallery_thumb',
            slidesToShow: 1,
            slidesToScroll: 1,
        });
        $('.under_gallery_thumb').slick({
            asNavFor: '.under_gallery_slide',
            slidesToShow: 8,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            infinite: true,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 641,
                    settings: {
                        slidesToShow: 4,
                    }
                }
            ]
        });
    }
});