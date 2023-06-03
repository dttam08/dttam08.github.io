//SLIDER
$(window).load(function() {
	new WOW().init();
    $('.list_slide').slick({
  dots: false,
  infinite: true,
  arrows: false,
  speed: 0,
   autoplaySpeed: 5000,
  fade: true,
  autoplay:true,
  pauseOnHover:false,
  swipe:false,
  touchMove:false,
  pauseOnFocus:false


});

$('.list_cate li a').click(function(event) {
	var number =  $(this).attr('data-number');
	$('.list_cate li a').removeClass('active');
	$(this).addClass('active');
	$('.wrap_listproduct .list_product').removeClass('active');
	$('.wrap_listproduct #list_product'+ number).addClass('active');

});


setInterval(function(){ 
	var current;
	var cureentele = $('.list_slide_l .active');
	var element = $('.list_slide_l .box03_l_detail');
	var current1;
	var cureentele1 = $('.list_number .active');
	var element1 = $('.list_number li');
		element.each(function(index, el) {
			if ($(el).hasClass('active')){
				current = index;	
			}
						
		});	
		element1.each(function(index, el) {
			if ($(el).hasClass('active')){
				current1 = index;	
			}
					
		});	
		$('.list_slide_l .box03_l_detail').removeClass('active');
		if(current < element.length - 1){
				cureentele.next().addClass('active')
		}
		else{
			$(element[0]).addClass('active');	
		}

		$('.list_number li').removeClass('active');
		if(current1 < element1.length - 1){
				cureentele1.next().addClass('active')
		}
		else{
			$(element1[0]).addClass('active');	
		}

}, 3000);

});

jQuery(document).ready(function($) {
	
var h2 = $('.h2_change h2');
$(h2[0]).addClass('active');
var span = $('.span_change span');
$(span[0]).addClass('active');



setInterval(function(){
		if($('.rotate').hasClass('active')){
				$('.rotate').removeClass('active')
		}
		else{
			$('.rotate').addClass('active');
		}
		var number;
		$(h2).each(function(index, el) {
			if($(el).hasClass('active')){
				number = index
			}
		});
		$(h2).removeClass('active');
		$(span).removeClass('active');
		if(number < h2.length - 1){
			$(h2[number + 1]).addClass('active');
			$(span[number + 1]).addClass('active');
		
		}

		else{
			$(h2[0]).addClass('active');
			$(span[0]).addClass('active');
			
		};

},5500);




















});	