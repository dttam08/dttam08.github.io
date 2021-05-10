
function Helper(){
    var methods =this;
    methods.initCloseAllElement = function(){
     
        $('body').on('click', function(event){
            var target = $(event.target);
            if( !target.is('.content-category .content-left,.content-category .content-left *, .btn-open-side-bar-product,.btn-open-side-bar-post, .menu-post-vertical,.menu-post-vertical *,.menu#dropdown-menu-account-not-login,#dropdown-menu-account-log-in,.accordion-menu-vertical,.accordion-menu-vertical *,.navbar-toggler,.navbar-toggler *,.header-responsive,.header-responsive *,#dropdown-menu-account-not-login')){
                $(".accordion-menu-vertical").removeClass("open");
                $(".dropdown-menu-account-content").removeClass("open");
               
                $(".navbar-toggler").removeClass("active");
                $(".menu-post-vertical").removeClass("open");
                $(".content-category .content-left").removeClass("open");
                $('body').removeClass('active');
            }
        });
    }
    //Dropdown user logged
    methods.initToggleDropdownMenuUserLogin = function(){
        $("#dropdown-menu-account-log-in,#dropdown-menu-account-not-login").on("click",function(){
            $(this).next().toggleClass("open");
        })
    }
    methods.initCarouselSameProductDetail = function (){

    //Carousel same proudct - page product detail
    $(".section-same-product .content-same-product .owl-carousel").owlCarousel({
        loop:true,
        autoplay:true,

        navigation : true,
        navText: ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        margin:15,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false,

            },
            1000:{
                items:4,
                nav:true,
                loop:true
            }
        }
    })
    }
      //Carousel same news - page blog detail
    methods.initCarouselSameProductBlogDetail = function (){
        $(".section-same-news .owl-carousel").owlCarousel({
            loop:true,
            autoplay:true,
        
            navigation : true,
            navText: ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
            autoplayTimeout:1000,
            autoplayHoverPause:true,
            margin:15,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:2,
                    nav:true,
        
                },
                1000:{
                    items:2,
                    nav:true,
                    loop:true
                }
            }
        })
    }
    methods.initCarouselNewProduct = function (){
         //carousel home page - new product
        $(".section-new-product .content-new-product .owl-carousel").owlCarousel({
            loop:false,
            autoplay:true,

            navigation : true,
            navText: ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
            autoplayTimeout:1000,
            autoplayHoverPause:true,
            margin:15,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                576:{
                    items:2,
                    nav:true,

                },
                768:{
                    items:2,
                    nav:true,
                },
                1000:{
                    items:4,
                    nav:true,
                
                }
            }
        });
    }
    methods.initRotateMenuBlog = function (){
          
   
    //Hide show menu right page blog
    $(".menu-post-vertical>a").click(function(){
        $(this).find("i").toggleClass("show");
    });
   
    }
    methods.initOpenBoxSearch = function (){
         
    //Open search box
        $(".btn-open-box-search").click(function(){
            $(".content-box-search").toggleClass("show-search-box");
        })
        $(".btn-close-box-search").click(function(){
            $(".content-box-search").removeClass("show-search-box");
        })

    }
    methods.initCountDownTimer = function (){
        $("#future_date").countdowntimer({
            hours : 26,
            minutes : 24,
            seconds : 06,
            labelsFormat : true,
            displayFormat : "HMS"
        });
    }
    methods.initTooltip = function (){
          //tooltip
          $('.btn-add-to-cart').tooltipster({
            position: 'right',
            theme: ['tooltip-style-1']
          });
          $('.btn-like').tooltipster({
          
            position: 'right',
            theme: ['tooltip-style-2'],

            //Custom vị trị của mess
            // functionPosition: function(instance, helper, position){
            //     // position.coord.top += -20;
            //     position.coord.left += -20;
            //     return position;
            // }
          });
    }

    methods.initSlickProductDetail = function (){
        var big = $(".img-big-slick");
        var thumb = $(".list-img-thumbail-slick")
        if (thumb.length) {
            if (thumb.hasClass('slick-initialized')) {
                thumb.slick('unslick');
            }
            thumb.slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                asNavFor: '.img-big-slick',
                centerMode: true,
                focusOnSelect: true,
                arrows:true,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2,
                            arrows:true,
                            dots:false
                        }
                    },
                ]
            });
        }
   
        if (big.length) {
            if (big.hasClass('slick-initialized')) {
                big.slick('unslick');
            }
            big.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: '.list-img-thumbail-slick'
            });
        }
    }

    methods.initSlickModalQuickView = function (){
        var modalImageBig =  $('.big-thumbs');
        var modalImageSmall = $(".list-thumbs");
        if (modalImageBig.length) {
            if (modalImageBig.hasClass('slick-initialized')) {
                modalImageBig.slick('unslick');
            }
            modalImageBig.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: '.list-thumbs',
               
            });
        }
        if (modalImageSmall.length) {
            if (modalImageSmall.hasClass('slick-initialized')) {
                modalImageSmall.slick('unslick');
            }
            modalImageSmall.slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: '.big-thumbs',
                centerMode: true,
                focusOnSelect: true,
                infinite:true,
                responsive : [
                    {
                        breakpoint: 1920,
                        settings: {
                            centerMode:true,
                   
                        autoplay:false,
                        dots     : false,
                        arrows   : true,
            
                        slidesToScroll : 1,
                        slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 1129,
                        settings: {
                        arrows: false,
                        centerMode:true,
                        autoplay:false,
                        dots     : false,
                        
                        
                        slidesToScroll : 1,
                        slidesToShow: 3
                        }
                    },
            
                    {
                        breakpoint: 1024,
                        settings: {
                        arrows: true,
                      
                        autoplay:false,
                        dots     : false,
                        arrows   : true,
                        
                        slidesToScroll :1,
                        slidesToShow: 3,
                   
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            arrows: true,
                            centerMode: true,
                            slidesToScroll : 1,
                            slidesToShow: 2,
                            dots:false,
                       
                            autoplay:false
                        }
                    },
                    {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        slidesToScroll : 1,
                        slidesToShow: 2,
                        dots:false,
                   
                    }
                    },
                    
                    {
                    breakpoint: 499,
                    settings: {
                        arrows: true,
                        dots:false,
                        centerMode: true,
                        slidesToScroll : 1,
                        centerPading:'5px',
                        slidesToShow: 2,
                      
                        autoplay:false
                    }
                    }
                ]
            });
        }
       
       
    }
    //Đóng mở menu filter product
    methods.initOpenSideBarProduct = function (){
        $(".btn-open-side-bar-product").click(function(){
            $(".content-category .content-left").toggleClass("open");
            $("body").addClass("active");
        })
    }
    //Xoay icon menu trang list product
    methods.initRotateMenuFilter = function (){
                //Rotate icon
        $(".menu-vertical-filter .card-header h5").click(function(){
            $(this).find("i").toggleClass("rotate");
        })

    }

    //Click open menu responsive
    methods.initMenuResponsive = function (){
      
        //menu responsive
        $(".btn-open-side-bar-menu").click(function(){
            $(".accordion-menu-vertical").toggleClass("open");
            $("body").toggleClass("active");
            $(".navbar-toggler").toggleClass("active");
        })
       
    }
    //Click dropdown item menu responsive
    methods.initDropdownMenuResponsive = function(e){
        $(".accordion-menu-vertical>ul>li").on("click",function(){
            
            $(this).next().toggleClass('open');
            $(this).find("i.fa-chevron-right").toggleClass("rotate-icon-angle");
        })
       
    }
    //Click dropdown item sub menu responsibe
    methods.initDropdownMenuResponsive1 = function(){
        
        $(".accordion-menu-vertical>ul>ul>li").on("click",function(e){

            $(this).next().toggleClass('open');
            e.stopPropagation();
           $(this).find("i.fa-chevron-right").toggleClass("rotate-icon-angle");
        });
    }
    methods.initCheckOutMethod = function () {
        $('.not-account').on('click', function(){
            $('.radio-login-content').slideUp();
            $('.radio-create-account-content').slideUp();
        })
        $('.create-account').on('click', function(){
            $('.radio-login-content').slideUp();
            $('.radio-create-account-content').slideDown();
        })
        $('.not-account-1').on('click', function(){
            $('.radio-create-account-content').slideUp();
            $('.radio-login-content').slideDown();
        })
    }
     //Tăng giảm số lượng quản lí giỏ hàng
    methods.initCountNumberCart = function(){
        $(document).on('click', '.custom-quantity-cart .btn-decrease', function (e) {
            var $input = $(this).siblings('.input-quantity-cart');
            val = parseInt($input.val()),
            max = parseInt($input.attr('max')),
            step = parseInt($input.attr('step'));
            var temp = val + step;
            $input.val(temp <= max ? temp : max);
            console.log(temp);
        });
        $(document).on('click', '.custom-quantity-cart .btn-increase', function (e) {
            var $input = $(this).siblings('.input-quantity-cart');
            val = parseInt($input.val()),
            min = parseInt($input.attr('min')),
            step = parseInt($input.attr('step'));
            var temp = val - step;
            $input.val(temp >= min ? temp : min);
            console.log(temp);
        });
    }
     //Tăng giảm số lượng modal quick view
     methods.initModalQuickViewCountNumberCart = function(){
        $(document).on('click', '.modal-content .btn-increase', function (e) {
            var $input = $(this).siblings('.input-quantity-cart');
            val = parseInt($input.val()),
            max = parseInt($input.attr('max')),
            step = parseInt($input.attr('step'));
            var temp = val + step;
            $input.val(temp <= max ? temp : max);
            console.log(temp);
        });
        $(document).on('click', '.modal-content .btn-decrease', function (e) {
            var $input = $(this).siblings('.input-quantity-cart');
            val = parseInt($input.val()),
            min = parseInt($input.attr('min')),
            step = parseInt($input.attr('step'));
            var temp = val - step;
            $input.val(temp >= min ? temp : min);
            console.log(temp);
        });
    }
    //Open sidebar post category
    methods.initOpenSideBarPost = function(){
        $(".btn-open-side-bar-post").click(function(){
            $(".menu-post-vertical").toggleClass("open");
            $("body").addClass("active");
        });
    }
    //Khai báo tất cả methods tại đây
    methods.init = function(){
      
        methods.initCloseAllElement();
        methods.initToggleDropdownMenuUserLogin();
        methods.initCarouselSameProductDetail();
        methods.initCarouselSameProductBlogDetail();
        methods.initRotateMenuFilter();
        methods.initTooltip();
        methods.initMenuResponsive();
        methods.initDropdownMenuResponsive();
       methods.initDropdownMenuResponsive1();
        methods.initCountDownTimer();
        methods.initSlickProductDetail();
        methods.initOpenBoxSearch();
        methods.initRotateMenuBlog();
        methods.initCarouselNewProduct();
        methods.initCheckOutMethod();
        methods.initCountNumberCart();
        methods.initOpenSideBarPost();
        methods.initOpenSideBarProduct();
        methods.initSlickModalQuickView();
        methods.initModalQuickViewCountNumberCart();
    }

    return methods;
}
$(function(){
    var helper = new Helper();
    helper.init();
})