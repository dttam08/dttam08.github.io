// JavaScript Document


$(function() {
    "use strict";
    var obj = {
        init: function() {
            this.initEffect();
            this.textEffectMainvisual();
            this.loadPost();
        },
        initEffect: function() {
            $(window).on('load', function() {
                {
                    if ($(".wow").length > 0) {
                        new WOW().init();
                    }
                }
            });

            if ($('.js__randomTypo').length) {
                $('.js__randomTypo').each(function() {
                    var $_self = $(this);
                    var $_parent = $_self.parent();
                    var $_string;
                    $_self.replaceWith($_self.text().replace(/(\S)/g, '<span class="js__randomTypoItem">$&</span>'));
                    $_string = $_parent.find('.js__randomTypoItem');
                    if ($_string.length) {
                    	if(!window.document.documentMode) {
	                        var $_array = Array.from(Array($_string.length).keys()); //[...Array($_string.length)];
	                        $.each($_array, function($i, $val) {
	                            $_array[$i] = $i % 5;
	                        });
	                        // $_array = shuffle($_array);
	                        $_array = $_array.sort(function() { Math.random() - 0.5 })
	                        $.each($_array, function($i, $val) {
	                            var $_number = ('00' + $val).slice(-2);
	                            $_string.eq($i).addClass('js__randomTypoItem--' + $_number);
	                        });
                    	}
                    }
                });
            }
        },
        textEffectMainvisual: function() {
            $(window).on("load", function() {
                $(".idx_mv_ttl01").textillate({ minDisplayTime: 500, in: { effect: 'fadeInUp', delay: 40, } });
                $(".idx_mv_ttl02 .txt01").textillate({ minDisplayTime: 500, initialDelay: 300, in: { effect: 'fadeInUp', delay: 40, } });
                $(".idx_mv_ttl02 .txt02").textillate({ minDisplayTime: 500, initialDelay: 500, in: { effect: 'fadeInUp', delay: 40, } });
                $(".idx_mv_ttl02 .txt03").textillate({ minDisplayTime: 500, initialDelay: 800, in: { effect: 'fadeInUp', delay: 40, } });
            });
        },
        loadPost: function() {
            $.ajax({
                'url': 'blog/_custom/?limit=5',
                'dataType': 'jsonp',
                'success': function(json) {
                    $.each(json.data, function(i, val) {
                        // console.log(json.data)
                        var item = $('<li class="idx_box_news_item"><span class="post_date">' + val.date + '</span><p class="post_ttl"><a href="blog/' + val.url + '">' + val.title + '</a></p></li>');
                        item.appendTo(".idx_box_news_list");
                    });
                }
            });
        }
    };

    obj.init();

});