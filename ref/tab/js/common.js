// JavaScript Document
$(function(){
	"use strict";
	var obj = {
		init : function(){
			this.initTextAnimate();
			this.changeTab();
			this.initScrollBar();
			this.tab();
		},
		initTextAnimate: function(){
			$('.ttl').textillate({
				loop: true,
				in: { effect: 'rollIn' },
				out: {
					effect:'rollOut'
				}
			});

		},
		changeTab: function(){
			$(".box02-menu-tab a").on('click', function(){
				$(".box02-menu-tab a").removeClass("active");
					$(".box02-tab-ctn .tab-ctn").removeClass("show");
					var id  = $(this).attr("data-tab");
					$(this).addClass("active");
					$("#"+id).addClass("show");
            })
		},
		tab: function () {
            $('.tab_link').click(function () {
                let data = $(this).attr('data-tab');
        
                $('.tab_link').removeClass('active');
                $(this).addClass('active');
        
                $('.tab_content').removeClass('active');
                $('#reason' + data).addClass('active');
            });
        },
		initScrollBar: function(){
			$(window).on("load scroll resize", function(){
				var vW = $(window).width();
				if(vW > 640){
					$('.idx-tbl').mCustomScrollbar({
						theme: 'my-theme',
					});
				}
				else{
					$('.idx-tbl').mCustomScrollbar("destroy");
				}
			})
		}
	};
	obj.init();
});