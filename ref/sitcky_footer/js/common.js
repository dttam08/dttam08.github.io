$(function() {
    "use strict";
    var obj = {
        init: function() {
            this.changeTab();
            this.toTop();
        },
        toTop: function() {
            $("#totop").hide();
            $(window).on("load scroll",function () {
                if ($(this).scrollTop() > 10) {
					$('#totop').fadeIn();
                    var vW = $(window).width();
                    if(vW < 641){
                        $('.f_cta').addClass('show');
					}
					else {
                        $('.f_cta').removeClass('show');
					}
				} else {
					$('#totop').fadeOut();
					$('.f_cta').removeClass('show');
				}
         
            });
        },
        changeTab: function () {
            $('.under_frame_link').click(function () {
                let data = $(this).attr('data-tab');
        
                $('.under_frame_link').removeClass('active');
                $(this).addClass('active');
        
                $('.under_frame_menu_content').removeClass('active');
                $('#under_frame_menu_content' + data).addClass('active');
            });
        },

    
    };

    obj.init();
});


