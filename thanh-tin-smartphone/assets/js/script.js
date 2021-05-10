
function Helper(){
    var methods =this;
    methods.initCloseMenuDropdown = function(){
        $('body').on('click',function(event){
            var target = $(event.target);
            if (!target.is('.dropdown-sort-content,.btn-toggle-user-login,.content-menu-user-login,.content-menu-user-login*,.btn-dropdown-feature,.dropdown-feature>ul,.dropdown-feature>ul,.dropdown-feature>ul .row,.dropdown-feature>ul .row *,.btn-dropdown-sort')) {
                $(".content-menu-user-login").removeClass("open");
                $(".dropdown-feature>ul").removeClass("open");
                $(".dropdown-sort>ul").removeClass("open");
            }
        })
    }
    methods.initClickDropdownMenuUserLogin = function(){
        $(".btn-toggle-user-login").on('click',function(){
            $(".content-menu-user-login").toggleClass("open");
        })
    }
    methods.initTooltip =function(){
        $('[data-toggle="tooltip"]').tooltip();
    }
    //Carousel slider Page home 
    methods.initCarouselHomeSlider = function (){
        $(".section-home-slider .owl-carousel").owlCarousel({
            loop:true,
            autoplay:true,

            navigation : true,
            navText: ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            // margin:15,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:false,
                    loop:true
                },
                600:{
                    items:1,
                    nav:true,
                    loop:true
                },
                1000:{
                    items:1,
                    nav:true,
                    loop:true
                }
            }
        })
    }
    //Carousel slider list brand - Page List Product
    methods.initCarouselListBrandSlider = function (){
        
   
        $(".section-carousel-list-brand .owl-carousel").owlCarousel({
            loop:true,
            autoplay:true,

            navigation : true,
            navText: ["<i class='fal fa-angle-left'></i>","<i class='fal fa-angle-right'></i>"],
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            // margin:15,
            responsiveClass:true,
            responsive:{
                0:{
                    items:2,
                    nav:false,
                    loop:true,
                 
                },
                420:{
                    items:4,
                    nav:false,
                    loop:true,
                },
                600:{
                    items:6,
                    nav:false,
                    loop:true
                },
                992:{
                    items:6,
                    nav:false,
                    loop:true
                },
                1000:{
                    items:8,
                    nav:true,
                    loop:true
                }
            }
        })
    }
    //Menu responsive
    methods.initMenuRes = function(){
        var menu = $('#menu-main-res');
        var toggle = $('#btn-open-side-bar-menu');
        var show =  $('#menu-main-res').hasClass('is-active');
        var megaMenu = $(".menu-mega-dropdown");
        var main = $('body, html');
        toggle.on('click', function(event){
            event.preventDefault();
            if( show ){
                main.removeClass('is-menu-open');
                menu.removeClass('is-active');
                toggle.removeClass('is-active');
                megaMenu.removeClass('menu-mega-dropdown-is-active');
            }else{
                main.addClass('is-menu-open');
                menu.addClass('is-active');
                toggle.addClass('is-active');
                megaMenu.addClass('menu-mega-dropdown-is-active');
            }
            show = ! show;
        });
        main.on('click', function(event){
            var target = $(event.target);
            if( !target.is( '#menu-main , #menu-main * , #btn-open-side-bar-menu, #btn-open-side-bar-menu *' ) ){
                main.removeClass('is-menu-open');
                menu.removeClass('is-active');
                toggle.removeClass('is-active');
                show = false;
            }
        })
    }
    //Check out 
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
   
    //Hiện drodown menu trang list product
    methods.initDrodownMenuSortProduct = function(){
       

        var btnDropdownSort =  $(".btn-dropdown-sort");
        
        var btnDropdownFeature =$(".btn-dropdown-feature");
     
        btnDropdownSort.click( function(){
            $(this).next().toggleClass("open");
        })

        btnDropdownFeature.click( function(){
            $(this).next().toggleClass("open");
        })
      
    }
    methods.initReadmoreContent = function(){
        
        $(".read-more-content").on('click',function(){
            $(".section-info-product-detail-bottom .feature-product-detail .content").css("height","auto");
            $(this).hide();
            $(".read-less-content").css("display","block");
            $(".section-info-product-detail-bottom .feature-product-detail .show-more ").addClass("hide-gradient");
        })
        // $(".read-less-content").on('click',function(){
        //     $(".section-info-product-detail-bottom .feature-product-detail .content").css("height","999px");
        //     $(this).hide();
        //     $(".read-more-content").css("display","block");
        //     $(".section-info-product-detail-bottom .feature-product-detail .show-more ").addClass("hide-gradient");
        // })
    }

   
    methods.initSlickProductDetail = function (){
    
        $('.img-big-slick').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.list-img-thumbail-slick',
           
        });
        $('.list-img-thumbail-slick').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.img-big-slick',
            centerMode:true,
            focusOnSelect: true,
            centerMode: true,
            responsive : [
                {
                    breakpoint: 1920,
                    settings: {
                        centerMode:true,
               
                    autoplay:false,
                    dots     : false,
                    arrows   : true,
        
                    slidesToScroll : 1,
                    slidesToShow: 4
                    }
                },
                {
                    breakpoint: 1129,
                    settings: {
                    arrows: true,
                    centerMode:true,
                    autoplay:false,
                    dots     : false,
                    
                    
                    slidesToScroll : 1,
                    slidesToShow: 4
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
                    slidesToShow: 6,
               
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        slidesToScroll : 1,
                        slidesToShow: 3,
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
                    slidesToShow: 3,
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
    
    methods.initSlickModalQuickView = function (){
        $('.img-modal-big').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.img-modal-small',
           
        });
        $('.img-modal-small').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.img-modal-big',
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
                    slidesToShow: 4
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
                    slidesToShow: 4
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
                    slidesToShow: 4,
               
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        slidesToScroll : 1,
                        slidesToShow: 3,
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
                    slidesToShow: 3,
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
    methods.initFadeOutModal =function(){
        $('.modal').on('hide.bs.modal', function (e) {
            $(this).toggleClass("fade-out-modal");
        })
    }
    methods.initResizeSlickModalQuickView=function(){
        $('.modal').on('shown.bs.modal', function (e) {
            $('.img-modal-big,.img-modal-small').resize();
        })
    }
    methods.initModalproduct = function(){
        $('.big-thumbs').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.list-thumbs'
        });
        $('.list-thumbs').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.big-thumbs',
            centerMode: true,
            focusOnSelect: true
        });
    }


    methods.initOpenSearchBoxResponsive = function(){
        $(".btn-open-search-responsive").on('click',function(){
            $(".form-search-responsive").addClass("open");
        });
        $(".btn-close-form-search-responsive").on('click',function(){
            $(".form-search-responsive").removeClass("open");
        });
    }

    //Khai báo tất cả methods tại đây
    methods.init = function(){
        //Đóng tất cả khi click ra body
        methods.initCloseMenuDropdown();
        //Dropdown menu khi user đã login
        methods.initClickDropdownMenuUserLogin();
        methods.initCarouselHomeSlider();
        methods.initCarouselListBrandSlider();
        methods.initMenuRes();
        methods.initCountNumberCart();
        methods.initModalQuickViewCountNumberCart();
        methods.initCheckOutMethod();
        methods.initTooltip();
        methods.initReadmoreContent();
        
        methods.initDrodownMenuSortProduct();
        methods.initSlickProductDetail();
        methods.initSlickModalQuickView();
        methods.initResizeSlickModalQuickView();
        methods.initFadeOutModal();
        methods.initModalproduct();
        methods.initOpenSearchBoxResponsive();
    }

    return methods;
}
$(function(){
   

    var helper = new Helper();
    helper.init();
   
})