$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
		$('.menu_pc').toggleClass('open');
		$('.menu_sp').toggleClass('open');


	});



if($(window).width() < 751){
	$('.sub_menu').slideUp(400);
	$('.fixed_bottom').slideUp(400);
	$('.have_sub a').click(function(event) {

		$(this).toggleClass('open').next().slideToggle(400);
	});

	$(window).scroll(function(event) {
	
			  if($(this).scrollTop() >= 500) {
       		 $('.fixed_bottom').slideDown(400);
    
    } else {
         
    			 $('.fixed_bottom').slideUp(400);

      }

	});







}


});

