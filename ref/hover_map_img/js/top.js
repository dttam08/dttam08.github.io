$(document).ready(function() {
    'use strict';
	/*Slider();*/
	news();
	fimg();
	$(".box07-item dl").click(function(){
		  window.location= $(this).find("a").attr("href");
		  return false;
	 });
});

function news(){
	'use strict';
	$.ajax({
	'url' : 'https://www.h-o-k-s.com/column/_custom/?limit=3',
	'dataType' : 'jsonp',
	'success' : function(json){
		$.each(json.data, function(i,val){
		var $li = $('<li/>').html(									
		'<span class="date">' + val.date + '</span>' + '<span class="title">' + '<a href="https://www.h-o-k-s.com/column/'+ val.url +'">' +  val.title + '</a>' + '</span>');						
	$li.appendTo('.column');
	});
	}
	});
}

function Slider(){
	'use strict';
	$('.box01-slider').slick({
		dots: false,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		arrows: true,
		pauseOnHover: false,
		centerMode: true,
		variableWidth: true
	});
}
function fimg(){
	"use strict";
	$('.box03-link li').mouseover(function(){
		$(this).find(".box03-btn img").attr("src",$(this).find(".box03-btn img").attr("src").replace(/_off/, "_on"));
	});
	$('.box03-link li').mouseout(function(){
		$(this).find(".box03-btn img").attr("src",$(this).find(".box03-btn img").attr("src").replace(/_on/, "_off"));
	});
}

!function($){
 $.ajax({
  'url' : 'https://www.h-o-k-s.com/case/_custom/?cat=2',
  'dataType' : 'jsonp',
  'success' : function(json){
   $.each(json.data, function(i,val){
	  for(var j=1;j<31;j++){
		  var tag= "img";
		  if(j<10){
			  j = "0"+j;
		  }
		  tag= tag+j;
		//  console.log(tag);
	//console.log(val.(tag.toString()));
		   if(val.tag==''){
			//   console.log(val.tag);
			   
			}
		}
	var thumb;
	if(val.img01!=""){
		thumb = val.img01;
	}
	else if(val.img02!=""){
		thumb = val.img02;
	}
	else if(val.img03!=""){
		thumb = val.img03;
	}
	else if(val.img04!=""){
		thumb = val.img04;
	}
	else if(val.img05!=""){
		thumb = val.img05;
	}
	else if(val.img06!=""){
		thumb = val.img06;
	}
	else if(val.img07!=""){
		thumb = val.img07;
	}
	else if(val.img08!=""){
		thumb = val.img08;
	}
	else if(val.img09!=""){
		thumb = val.img09;
	}
	else if(val.img10!=""){
		thumb = val.img10;
	}
	else if(val.img11!=""){
		thumb = val.img11;
	}
	else if(val.img12!=""){
		thumb = val.img12;
	}
	else if(val.img13!=""){
		thumb = val.img13;
	}
	else if(val.img14!=""){
		thumb = val.img14;
	}
	else if(val.img15!=""){
		thumb = val.img15;
	}
	else if(val.img16!=""){
		thumb = val.img16;
	}
	else if(val.img17!=""){
		thumb = val.img17;
	}
	else if(val.img18!=""){
		thumb = val.img18;
	}
	else if(val.img19!=""){
		thumb = val.img19;
	}
	else if(val.img20!=""){
		thumb = val.img20;
	}
	else if(val.img21!=""){
		thumb = val.img21;
	}
	else if(val.img22!=""){
		thumb = val.img22;
	}
	else if(val.img23!=""){
		thumb = val.img23;
	}
	else if(val.img24!=""){
		thumb = val.img24;
	}
	else if(val.img25!=""){
		thumb = val.img25;
	}
	else if(val.img26!=""){
		thumb = val.img26;
	}
	else if(val.img27!=""){
		thumb = val.img27;
	}
	else if(val.img28!=""){
		thumb = val.img28;
	}
	else if(val.img29!=""){
		thumb = val.img29;
	}
	else if(val.img30!=""){
		thumb = val.img30;
	}

	else{
		thumb = '<img src="https://www.h-o-k-s.com/images/under_img01.jpg" alt='+val.title+'">';
	}
	
	//var thumb = val.img01 ? val.img01 : '<img src="https://www.h-o-k-s.com/images/under_img01.jpg" alt='+val.title+'">';
	
	var short_txt = val.title.length < 70 ? val.title : val.title.substr(0,70)+'...';
	var $li = $('<a href="https://www.h-o-k-s.com/case/'+ val.url +'"/>').html(
	
	'<span class="idx-case-img">' + thumb + '</span>' +
	'<span class="idx-case-ttl">' + short_txt + '</span>'
	)
$li.appendTo('.box01-slider');
   })
   Slider();
  } 
 })	 
}(jQuery);








