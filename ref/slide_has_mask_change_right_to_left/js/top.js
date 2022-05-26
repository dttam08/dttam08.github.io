// JavaScript Document
$(function(){
	"use strict";
	var obj = {
		init : function(){
			this.slider();
		},
		slider:function(){
			const slide = $(".slider_unit");
 
            if (slide) {
                const slideItem = $('.slide_item');  
                const totalNum = slideItem.length - 1;         
                const FadeTime = 2000;
                const IntarvalTime = 5000;                       
                var actNum = 0;                                         
                var nowSlide;                                         
                var NextSlide;                         
                slideItem.eq(0).addClass('is_active');
                setInterval(() => {
                    if (actNum < totalNum) {
                        nowSlide = slideItem.eq(actNum);
                        NextSlide = slideItem.eq(++actNum);
                        console.log(NextSlide)
                        nowSlide.removeClass('show');
                        NextSlide.addClass('is_active show');
                        setTimeout(() => {
                            nowSlide.removeClass('is_active');
                        }, FadeTime);
                    } else {
                        nowSlide = slideItem.eq(actNum);
                        NextSlide = slideItem.eq(actNum = 0);
                        nowSlide.removeClass('show');
                        NextSlide.addClass('is_active show');
                        setTimeout(() => {
                            nowSlide.removeClass('is_active');
                        }, FadeTime);
                    };
                }, IntarvalTime);
            }
        },

	};
	
	obj.init();
	
});