$(document).ready(function(){
    $('#factory_container ').roundabout({
        duration: 1000,
        minScale: 0.75,
        autoplay: true,
        autoplayDuration: 3000
    });
    
    $.ajax({
        'url': 'topics/_custom/?limit=3',
        'dataType': 'jsonp',
        'success': function (json) {
            $.each(json.data, function (i, val) {
                var title = val.title;
                title = title.length < 30 ? title : title.substr(0, 30) + '...';
                var html = '<li><span class="date">' + val.date.replace(/\//g, '.') + '</span><a href="topics/' + val.url + '" class="ttl">' + title + '</a></li>';
                $('.topics_list').append(html);
            });
        }
    });

    AOS.init({
        once: true
    });

    console.log($(window).width());
})

