$(function () {
    "use strict";
    var obj = {
        init: function () {
            this.animation();
            this.loadPost();
            this.slider();
        },
        animation: function () {
            if ($(".wow").length > 0) {
                new WOW().init();
            }
        },
        loadPost: function(){
            $.ajax({
                'url' : 'summary/_custom/?limit=3',
                'dataType' : 'jsonp',
                'success' : function(json){
                    $.each(json.data, function(i,val){
                        var ttl = val.title.length < 50 ? val.title : val.title.substr(1,5)+'...';
                        var item = $('<li><a href="summary/'+val.url+'"><p class="date">'+val.date.substr(0,4) + '.' + val.date.substr(5,2) + '.' + val.date.substr(8,2)+'</p><p class="ttl">'+val.title+'</p></a></li>');
                        item.appendTo(".idx_blog");
                    });
                }
            });
        },
        slider: function () {
            $('.idx_slide_item:gt(0)').removeClass('is_active');
            setInterval(function(){
                $('.idx_slide_item:first-child').removeClass('is_active')
                   .next().addClass("is_active")
                   .end().appendTo('.idx_slider');}, 
                6000);
        },

    };
    obj.init();
});


