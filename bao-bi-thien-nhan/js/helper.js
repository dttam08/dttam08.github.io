var helper  = new Helper ();


function Helper(){
  var methods = this;
  var wrapper = $('.wrapper');
  var init =  function(){
    // wave.
    Waves.init();
    Waves.attach('#navigation li a, .link-detail, .as-btn-orange-large, .profile-usermenu li a, #main-column .box-heading .title-group, .treeview li a, .breakcrumb li a, .pagination li a,.options-sizes a, .options-colors a',['waves-block' , 'waves-light']);
    Waves.attach('.signin-block a',['waves-block' ]);
    Waves.attach('.btn, .add-to-cart',['waves-button','waves-float']);



    methods.navChild();
    methods.navMobile();
    methods.menuFixed();
    methods.openModalRegister();
    methods.openMenuChildMobile();
    methods.initSlider();
    methods.scrollMenuSticky();
    methods.scrollUp();
    methods.focusResetModal('#myRegister','name');
    methods.openCartProductList();
    methods.priceSlider();
    methods.btnToggleWidget();
    methods.showHideSubMenu();
    methods.inputspinner();
    methods.reponsiveTableMobile();
    methods.zoomImage();
    methods.initHomeSlider();
  }
  //open popup images
  methods.initHomeSlider = function(){
    console.log('run this');
    var slider = $('#layerslider');
    slider.layerSlider({
        skin: 'fullwidth',
        autoPlayVideos: false,
        skinsPath: '/module-assets/WebFrontEnd/thiennhan/resources/vendor/layerslider/skins/',
        navButtons: true,
        navStartStop: true,
        hoverPrevNext: false,
        hoverBottomNav: false,
        touchNav: true,
        navStartStop: false,
    });
  }
  methods.zoomImage = function(){
    $(".openimage").on("click", function(event) {
      event.preventDefault();
      $('.imagepreview').attr('src', $(this).closest('.item-img').children('img').attr('src'));
    			$('#imagemodal').modal('show');
});
  }
  //table mobile
  methods.reponsiveTableMobile = function(){
    $('.table-mobile .toggle-trigger').on('click',function(){
      $(this).closest('tr').toggleClass('expand');
    });
  }
  // input spinner
  methods.inputspinner = function(){
    $('.spinner .btn:first-of-type').on('click', function() {
      var btn = $(this);
      var input = btn.closest('.spinner').find('input');
      if (input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max'))) {
        input.val(parseInt(input.val(), 10) + 1);
      } else {
        btn.next("disabled", true);
      }
    });
    $('.spinner .btn:last-of-type').on('click', function() {
      var btn = $(this);
      var input = btn.closest('.spinner').find('input');
      if (input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min'))) {
        input.val(parseInt(input.val(), 10) - 1);
      } else {
        btn.prev("disabled", true);
      }
    });
  }
  //show submenu treeview
  methods.showHideSubMenu = function(){
    $('.sub-menu > a').before().on('click', function(event){
        event.preventDefault();
          // $(this).closest('.treeview').find('.tree-child').addClass('hide');
      $(this).closest('.sub-menu').children('.tree-child').slideToggle('hide');
      $(this).toggleClass('focus');
    });
  }
  //show widget sidebar left
  methods.btnToggleWidget= function(){
    $('.btn-more').on('click', function(){
      $(this).closest('.widget').find('.options').toggleClass('hide');
      $(this).toggleClass('plus');
    });
  }

  methods.numberFormat = function(nStr){
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
  }
  // Price Slider
  methods.priceSlider = function(){
    if ($("#price-slider").length)     {
      $("#price-slider").slider({
        range: true, min: 0, max: 1000000, values: [200000, 700000], slide: function(event, ui) {
          $("#amount").val(+ ui.values[ 0 ] + " - " + ui.values[ 1 ]+ " vnđ");
        }
      }
    );
    $("#amount").val($("#price-slider").slider("values", 0) +"-" + $("#price-slider").slider("values", 1)+  " vnđ" );
  }

}

//click open list-product add into cart-product-list
methods.openCartProductList = function(){
  $('.link-cart').on('click', function(){
    $(this).closest('.top-cart').find('.cart-product').toggleClass('open');
    checkHasClass();
  });
  $('body').on('click', function(event) {
    var isOpen = $('.cart-product').hasClass('open');
    if( isOpen ){
      if(!$(event.target).is('.cart-product, .cart-product *,.link-cart, .top-cart')){
        $('.cart-product').removeClass('open');
        checkHasClass();
      }
    }
  });
  function checkHasClass(){
    if($('body').hasClass('menu-open')){
      $('body').removeClass('menu-open');
    }
    else{
      $('body').addClass('menu-open');
    }
  }
}
// add icon into menu has menuchild
methods.navChild = function(){
  function setClassMenu(root){
    root.each(function(index, el) {
      if( $(this).has('ul').length ){
        $(this).addClass('menu-child');
        setClassMenu($(this).find('ul>li>a'));
      }
    });
  }
  setClassMenu($('#navigation').find('.menu-hide > ul> li>a'));
}
  // open menu child on mobile
  methods.openMenuChildMobile = function(){
    $('#navigation .menu-child > a').after().on('click',function(event){
      event.preventDefault();
      $(this).closest('.menu-child').toggleClass('open');
    });
  }
// open modal register and close modal login
methods.openModalRegister = function(){
  $('.link-register').on('click',function(){
    $('#myLogin').modal('hide');
    $('#myRegister').modal('show');
  });
}
// animation search menu fixed
methods.menuFixed = function() {
  $('.toogle-fixed').on('click', function(){
    $('#menu-right-fixed ul').toggleClass('show');
    $(this).toggleClass('show');
  });
}
// animation search animation wrapper
methods.navMobile = function() {
  $('.menu-moblie').on('click', function(){
    $('.menu-hide').toggleClass('show');
    $(this).toggleClass('active');
    checkHasClass();
  });
  $('body').on('click', function(event) {
    var isOpen = $('.menu-hide').hasClass('show');
    if( isOpen ){
      if(!$(event.target).is('.menu-hide , .menu-hide * , .menu-moblie , .menu-moblie * ,#myLogin ,#myLogin * ,#myRegister , #myRegister *')){
        $('.menu-hide').removeClass('show');
        $('.menu-moblie').removeClass('active');
        checkHasClass();
      }
    }
  });
  function checkHasClass(){
    if($('body').hasClass('menu-open')){
      $('body').removeClass('menu-open');
    }
    else{
      $('body').addClass('menu-open');
    }
  }
}
// fixed menu when srcoll
methods.scrollMenuSticky=function(){
  var stickyTop = $(".sticky").offset().top;
  $(window).scroll(function(){
    var sticky = $('.sticky'),
    scroll = $(window).scrollTop();
    if (scroll > stickyTop){
      sticky.addClass('menu-fixed');
      // cart.addClass('show');
    }
    else{
      sticky.removeClass('menu-fixed');
      // cart.removeClass('show');
    }

    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });
  $(window).on('load resize', function(event) {
    $('.page-content').css('min-height', $('body').height()  - $('.bg-breakcrumb').height() - $('#navigation').height() - $('header').height() - $('footer').height());
  });
}
// display button scroll top
methods.scrollUp = function(){
  $('.scrollup').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });
}
// focus and reset form in modal
methods.focusResetModal = function(modal, name){
  // var modal = #myRegister;
  $('modal').on('shown.bs.modal', function(event) {
    $('modal').find('form')[0].reset();
    $('modal').find('input[name='+name+']').focus();
  });
}
// plugin sider
methods.initSlider = function(){
  //slider index
  $('.slide-home').slick({  dots:true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay:true,
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '0px',
    //       slidesToShow: 1
    //     }
    //   },
    // ]
  });
  
  $('.slide-logo').slick({
    slidesToShow:4,
    autoplay:true,
    arrows: true,
    responsive: [
    {
        breakpoint:768,
        settings: {
          autoplay:true,
          slidesToShow: 3
        }
      },  {
        breakpoint: 420,
        settings: {
          autoplay:true,
          slidesToShow: 2
        }
      },
    ]
  });
  $('.slider-certificates').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay:true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
        slidesToShow: 4,
        }
      },{
        breakpoint:768,
        settings: {
          slidesToShow: 3,
        }
      },  {
        breakpoint: 560,
        settings: {
          slidesToShow: 2,
        }
      },,  {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
  $('.product-thumbnails .slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
  });
  $('.product-thumbnails .slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    focusOnSelect: true,
    vertical: false,
    verticalSwiping: true,
  });

  $('.slider-articles').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
        slidesToShow: 2,
        }
      },{
        breakpoint:768,
        settings: {
          slidesToShow: 2,
        }
      },  {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
}
// call back init function
init();
return this;
}
