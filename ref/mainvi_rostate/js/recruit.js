jQuery(document).ready(function($) {
	$('.list_slide').slick({
  dots: false,
  infinite: false,
  arows: true,
  speed: 300,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
    centerMode: true,
  centerPadding: '30px',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    },
    {
      breakpoint: 751,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 461,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});



	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$('.menu_pc').toggleClass('open');
        $('.rgb').toggleClass('open');

	});








    if($(window).width() > 751) {

    var offSetG = $('.header_top').offset().top;
    var heightG = $('.header_top').outerHeight();
   if($(window).width() > 750){

        $(window).scroll(function(event) {

     if($(window).scrollTop() > offSetG){
        $('.header_top').addClass('fixed');
        $('#main').css('margin-top', heightG);
     }
     else{
        $('.header_top').removeClass('fixed');
        $('#main').css('margin-top', 0);
     }
    });
    
   }

    }


if($(window).width() < 751){ 
  $('.fixed_bottom').slideUp(400);
  $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
    $(this).toggleClass('open');

  });
}

  $(window).scroll(function(event) {
  
        if($(this).scrollTop() >= 500) {
           $('.fixed_bottom').slideDown(400);
    
    } else {
         
           $('.fixed_bottom').slideUp(400);

      }

  });




});

//BACK TO TOP
$(document).ready(function() {
   
 

    $('.to_top').click(function() {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });
});

$(window).bind('load scroll', function() {

   if($(this).scrollTop() >= 500) {
        $('.to_top').addClass('show');
    } else {
        $('.to_top').removeClass('show');    


      }



$('.rgb').click(function(event) {
  $('.menu_pc').removeClass('open');
  $(this).removeClass('open');
});



});

