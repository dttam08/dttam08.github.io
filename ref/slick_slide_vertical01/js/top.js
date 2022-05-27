$(document).ready(function()
{
    "use strict";
    
    window.onresize = reportWindowSize;
   
    reportWindowSize();

    function reportWindowSize()
    {
      //  console.log($(window).width());
      
        if ($(window).width() <= 750)
        {
            if(!$('.index05 .flex_col3').hasClass('slick-slider')){

           
                $('.idx05_row .flex_col3').slick(
                    {
                        settings: "unslick",
                        slidesToShow: 3,
                        arrows: false,
                        infinite: false,
                        autoplay: false,
                        variableWidth: true,
                        centerMode: false,
                        responsive: [
                        {
                            breakpoint: 751,
                            settings:
                            {
                                dots: false,
                                arrows: true,
                                infinite: true,
                                speed: 500,
                                slidesToShow: 1,
                                autoplaySpeed: 3000,
                                centerMode: true,
                                pauseOnHover: false,
                                centerPadding: '0px',
                                autoplay: true,
                                variableWidth: true
                            }
                        }]
                    });
            }
          
               
        }
        else
        {
         //   $('.idx05_row .flex_col3').slick.unslick();

        }
    }
    AOS.init(
    {
        once: true
    });
    $("#home-loader").delay(100).fadeOut().queue(function()
    {
        $("body").addClass('loadding');
        $("#home-loader-wrap").delay(100).css(
        {
            'visibility': "hidden",
            opacity: '0'
        }, 500);
        $("body").removeClass('loadding').addClass('loaded');
    });
});
$(window).load(function()
{
    "use strict";
    var $mainSlider = $('#visual .slider');
    $mainSlider.slick(
    {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: 'linear',
        pauseOnHover: false,
        useCSS: false,
        autoplay: false,
    });
    $mainSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide)
    {
        $mainSlider.find('.slick-slide').eq(currentSlide).removeClass('anim');
        $mainSlider.find('.slick-slide').eq(nextSlide).addClass('anim');
    });
    $mainSlider.find('.slick-current').addClass('anim');
    $mainSlider.slick('slickPlay');
    /*============== END - SLIDER ================*/
    /*==============  SLIDER IDX01 ================*/
    var slider01 = $('.event-slide');
    var slider01nav = $('.event-nav');
    $('.slider-nav > div').hide();
    $('.slider-nav > div:nth-child(1)').show();
    slider01.on('init', function(event, slick)
    {
        $(this).find('li').first().find('.item').removeClass('key_scale');
        $(this).find('li').first().find('.item').addClass('anim-active');
    });
    slider01.slick(
    {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        accessibility: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 3000,
        speed: 500,
        pauseOnFocus: false,
        pauseOnHover: false,
        dots: false,
        prevArrow: $('.key-pager_prev'),
        nextArrow: $('.key-pager_next'),
        fade: true,
        asNavFor: '.event-nav'
    });
    slider01nav.slick(
    {
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.event-slide',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        vertical: true,
        responsive: [
        {
            breakpoint: 480,
            settings:
            {
                slidesToShow: 4
            }
        }]
    });
    slider01.on('beforeChange', function(event, slick, currentSlide, nextSlide)
    {
        slider01.find('.slick-slide').eq(currentSlide).find('.item').removeClass('anim-active');
        slider01.find('.slick-slide').eq(nextSlide).find('.item').addClass('anim-active');
        var $check = slider01.find('.slick-slide').eq(nextSlide).find('.item');
        $('.slider-nav > div').hide();
        $('.slider-nav > div').eq(nextSlide).show();
    });
    $('.key-pager_next').click(function()
    {
        slider01.slick('slickNext');
    });
    $('.key-pager_prev').click(function()
    {
        slider01.slick('slickPrev');
    });
    /*==============  SLIDER IDX05 ================*/
   
});

