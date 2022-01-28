// Scroll to fmail when screen error, confirm, thanks
$(window).on('load', function(){
    var txtsearch = window.location.search;
    if (txtsearch.includes('mode')) {
        $('html, body').animate({
            scrollTop: $("#fmail").offset().top
        }, 800);
    }
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