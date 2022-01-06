$(window).bind('load', function () {
"use strict";
	$("#nav-icon3").click(function(){
		$("#gnavi").stop(1,1).toggleClass('open');
        $("#main").stop(1,1).toggleClass('open');
	});
	$("#gnavi").find("li ul li a").click(function(){
	  $("#gnavi").stop(1,1).toggleClass('open'); 
	});
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
		$("#gnavi ul li.sub01 ul").slideUp("fast");
		$("#gnavi ul li.sub01 a").removeClass("open");
	});
    $("#icon_close").click(function(){
		$("#main").stop(1,1).removeClass('open');
        $("#gnavi").stop(1,1).removeClass('open');
		$('#nav-icon3').toggleClass('open');
        
	});
    $("#gnavi ul li ul li a").click(function(){
		$('#nav-icon3').toggleClass('open');
	});	
});



//================= fix menu scroll=========================

// fix menu scroll
/*$(window).bind('load resize', function(){
	"use strict";
		$(window).scroll(function () {
			var h_menu  = $('#header').outerHeight();
			var h_gnavi = $("#header_t").outerHeight();	
			var top = $("#header_t").position().top + 140;
			if ($(this).scrollTop() >= top) {
				$("#header").addClass('active');
				//$("#top_info").css({'margin-top' : 52});			
			} else {
				 $("#header").removeClass('active');
				// $("#top_info").css({'margin-top' : 0});
			}

		});	
});


*/

/*==================menu sp==============*/
$(window).bind('load',function(){
	"use strict";	
	var gnavi = $("#gnavi>ul>li.sub01>a");
	$(gnavi).click(function(){
        if($(window).width() < 751){
		if($(this).hasClass('open')){
			$(this).removeClass('open');
			$(this).next("ul").slideToggle('open');
		}
		else{
			$(this).removeClass('open');
			$(this).addClass('open');
			$(this).next("ul").slideToggle('open');
		}
        }
	});
	$('#icon_close').click(function(){
		$(gnavi).removeClass('open');
		$(gnavi).next("ul").slideUp('open');
	});
	
});

/*===========box link==========*/
$(document).ready(function (e) {
  $(".under_2 .product_all dl").click(function () {
    window.location = $(this).find("a").attr("href");
    return false;
  });
});

