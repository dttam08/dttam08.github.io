jQuery(function($) {

	$('.btn_menu a').on('click', function(){
		$(this).parent().toggleClass('active');
		$('#gnavi_sp').toggleClass('open');
		$('.head_bar').toggleClass('opacity');
		return false;
	});	
	
	$('ul.menu a').click(function(){
		$('.btn_menu').toggleClass('active');
		$('#gnavi_sp').toggleClass('open');
	});
	
	$('ul.menu > li > span').click(function(){
		$(this).parent().toggleClass('active');
	});
	

	$(window).on('load scroll',function() {

		vW = $(window).width();
	
		scrollTop = $(this).scrollTop();
		
		if (scrollTop > 100)
			$('#totop').fadeIn();
		else 
			$('#totop').fadeOut();
		
		if(vW > 750){ // for pc
			
		}
		else{ // for sp
			if (scrollTop > 100)
				$('.bottom_bar').fadeIn();
			else 
				$('.bottom_bar').fadeOut();
		}

		// header
		if (scrollTop > $('#gnavi').offset().top){
			$('body').addClass('gnavi-sticky');
		}
		else{
			$('body').removeClass('gnavi-sticky');
		}
	
	});
	
	
	// anchor in page
	$(window).bind('load', function () {
		$('a[href^="#"]').click(function () {
			var id = $(this).attr('href')
			if ($(id).length) {
				scrollTop($(id).offset().top);
			}
			return false;
		});
		
		var hash = location.hash;
		if (hash) {
			scrollTop($(hash).offset().top);
		}
		
		function scrollTop(offsetTop){
			
			var $fix = 210;
			if($(window).width() <= 750)
				$fix = 170;
			
			$('html,body').animate({scrollTop: offsetTop - $fix }, 400);			
		}
	});
});


$(document).ready(function () {
	$(window).bind(('load'), function () {
	  AOS.init({
		easing: 'ease-out-back',
		duration: 1500,
		delay: 0,
		once: true,
		disable: 'mobile'
	  });
	});
	$('.anime').each(function (i) {
	  $(this).attr('data-aos', 'fade-up');
	});
  });

