// JavaScript Document
$(function() {
    'use strict';
  	var obj= {
	  	init: function(){
		    this.toTop();
			this.smoothScroll();
			this.topJS();
	  	},
	  	toTop: function(){
			$('#totop').hide();
			$(window).bind('load resize scroll', function() {
				  if($(this).scrollTop() > 100){
					  $('#totop').fadeIn();
					  if($(window).width() > 640){
					  	$('.f_call').removeClass('show');
					  } else {
					  	$('.f_call').addClass('show');
					  }
				  }
				  else{
					  $('#totop').fadeOut();
					  $('.f_call').removeClass('show');
				  }

			});
			$('#totop').click(function(){
				$('html,body').animate({ scrollTop: 0 }, 400);
				return false;
			});
			
	  	},
	  	smoothScroll : function(){
			$('a[href^="#"]').click(function() {
                if ($($(this).attr('href')).length) {
                    var p = $($(this).attr('href')).offset();
                    $('html,body').animate({ scrollTop: p.top - 120 }, 400);
                }
                return false;
            });
		},
	  	topJS : function(){
	  		$(window).bind('load', function() {
	  			new WOW().init();
	  			$('body').removeClass('loaded');
	  		});
	  		$(window).bind('load resize scroll', function() {
	  			var vS = $(this).scrollTop(),
	  				vW = $(window).width(),
	  				vG = $('#gnavi').outerHeight(),
	  				vM = $('#mainvisual').offset().top;
	  			if(vW > 640){
					if (vS > vM) {
						$('#gnavi').addClass('fixed');
						$('#mainvisual').css('margin-top', vG);
					} else {
						$('#gnavi').removeClass('fixed');
						$('#mainvisual').css('margin-top', '');
					}
				}
				else {
					$('#gnavi').removeClass('fixed');
					$('#mainvisual').css('margin-top', '');
				}
	  		});
		},
  };
  obj.init();
});


