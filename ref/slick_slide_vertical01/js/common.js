$(document).ready(function()
{
    "use strict";
    $('a[href^="#"]').not('#totop').click(function()
    {
        if ($($(this).attr('href')).length)
        {
            var p = $($(this).attr('href')).offset();
            if ($(window).width() > 751)
            {
                $('html,body').animate(
                {
                    scrollTop: p.top - 120
                }, 600);
            }
            else
            {
                $('.menu-icon').removeClass('active');
                $('#gnavi').fadeOut('fast');
                $('.submenu').stop().slideUp();
                $('.over').removeClass('active');
                $('html,body').animate(
                {
                    scrollTop: p.top - 70
                }, 600);
            }
        }
        return false;
    });
    $(window).load(function()
    {
        var hash1 = location.hash;
        var $root = $('html, body');
        if (hash1 !== "")
        {
            var top01 = $(hash1).offset().top;
            if ($(window).width() > 751)
            {
                $root.animate(
                {
                    scrollTop: top01 - 120
                }, 600);
            }
            else
            {
                $root.animate(
                {
                    scrollTop: top01 - 70
                }, 600);
            }
        }
    });
});
$(document).on('scroll', function() {
    y = $(this).scrollTop();
		
    if ( y > 10 ) {
        $("header,.bottom_bar").addClass("active");
    }
    else {
        $("header,.bottom_bar").removeClass("active");
    }
});
$(document).ready(function()
{
    "use strict";
    $("#totop, .f-call").hide();

    
    $(window).scroll(function()
    {
        var vW = $(window).width();
        var vH = $(window).height();
       
				
			
					
				
		
        if(vH > 890){
            if ($(this).scrollTop() > 100)
            {
                $('#totop').fadeIn();
               
            }
            else
            {
                $('#totop').fadeOut();
               
            }
        }else{
            if ($(this).scrollTop() > (980 - vH))
            {
                $('#totop').fadeIn();
               
            }
            else
            {
                $('#totop').fadeOut();
               
            }
        }
       
    });
});
$(document).ready(function()
{
    "use strict";
    $('.over').mouseenter(function()
    {
        if ($(this).hasClass('flag'))
        {
            return false;
        }
        else
        {
            $(this).find('.submenu').stop().slideDown();
        }
    });
    $('.over').mouseleave(function()
    {
        if ($(this).hasClass('flag'))
        {
            return false;
        }
        else
        {
            $(this).find('.submenu').stop().slideUp();
        }
    });
    $('.menu-icon').click(function()
    {
        $(this).toggleClass('active');
        $('#gnavi').stop().fadeToggle('fast');
        $('.submenu').stop().slideUp();
        $('.over').removeClass('active');
    });
    $('.close-menu').click(function()
    {
        $('.menu-icon').removeClass('active');
        $('#gnavi').fadeOut('fast');
        $('.submenu').stop().slideUp();
        $('.over').removeClass('active');
    });
    $('.over').click(function()
    {
        if ($(this).hasClass('flag'))
        {
            if ($(this).hasClass('active'))
            {
                $(this).removeClass('active');
                $('.submenu').stop().slideUp();
            }
            else
            {
                $('.over').removeClass('active');
                $('.submenu').stop().slideUp();
                $(this).addClass('active');
                $(this).find('.submenu').stop().slideDown();
            }
        }
    });
    $(window).bind("load resize scroll", function()
    {
        var vW = $(window).width();
        var Hhead = $('#header').outerHeight();
        var top = $(this).scrollTop();
        if (vW > 640)
        {
            $('.menu-icon').removeClass('active');
            $('.over').removeClass('flag');
            $('#gnavi').removeAttr('style');
            if (top > Hhead)
            {
                $('#gnavi').addClass('fixed');
                $('#mainvisual').css('margin-top', $('#gnavi').outerHeight());
            }
            else
            {
                $('#gnavi').removeClass('fixed');
                $('#mainvisual').removeAttr('style');
            }
        }
        else
        {
            $('.over').addClass('flag');
            $('#mainvisual').removeAttr('style');
            $('#gnavi').removeClass('fixed');
        }
    });
});
$(document).ready(function()
{
    "use strict";
    if ($('.under-mainbg').length)
    {
        var x = 0;
        setInterval(function()
        {
            x -= 1;
            $('.under-mainbg').css(
            {
                'background-position': x + 'px' + ' 0'
            });
        }, 50);
    }
    if ($('.property-listimg').length)
    {
        $('.property-listimg-main').slick(
        {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            asNavFor: '.property-listimg-thumb ul'
        });
        $('.property-listimg-thumb ul').slick(
        {
            slidesToShow: 8,
            slidesToScroll: 1,
            asNavFor: '.property-listimg-main',
            dots: false,
            focusOnSelect: true
        });
    }
});
$(function()
{
    if ($(window).width() <= 750)
    {
        $(".menu_toggle .menu_list ul .menu_sub > a").on("click", function(e)
        {
            $(this).parent().toggleClass("active");
            e.preventDefault();
        })
        $(".button-toggle").on("click", function()
        {
            $(".button-toggle").stop().toggleClass("active");
            $("#nav-icon").stop().toggleClass("open");
            $(".menu_toggle").stop().toggleClass("active");
            $("body,html").stop().toggleClass("ovh");
            $('#totop').fadeOut();
            if ($("body").hasClass("ovh"))
            {
                $(".fixed_banner, .nav_cal").addClass("active");
            }
            else
            {
                $(".fixed_banner, .nav_cal").removeClass("active");
            }
        });
    }
    else
    {
        $(".button-toggle").on("click", function()
        {
            $(".button-toggle").stop().toggleClass("active");
            $("#nav-icon").stop().toggleClass("open");
            $(".menu_toggle").stop().toggleClass("active");
            $("#header").removeClass("fix");
            $("body").stop().toggleClass("ovh");
        });
    }
})
//FIXED BANNER SP
$(document).on('scroll', function()
{
    var y = 0;
    y = $(this).scrollTop();
    if ($(window).width() <= 750)
    {
        if (y > (184))
        {
            $(".fixed_banner, .nav_cal").addClass("active");
        }
        else
        {
            $(".fixed_banner, .nav_cal").removeClass("active");
        }
    }
});
$(".ud_faq .answer").hide();
$('.ud_faq .question').click(function()
{
    var current = $(this).parent().find('.answer').slideToggle(400, function()
    {
        if (current.is(":hidden"))
        {
            $(this).parent().find('.question').removeClass('open');
        }
        else
        {
            $(this).parent().find('.question').addClass('open');
        }
    });
});
