$(function () {
    "use strict";
    var obj = {
        init: function () {
            this.initAnimate();
            this.loadPost01();
            this.loadPost();
        },
        initAnimate:function(){

            $('.text_effect').each(function(index, e) {
                var $sentence = $(this);
                var cloneElementContent = $sentence.html();
                var $sentenceChildNodes = $sentence[0].childNodes;

                var newNodeContent = '';
                for(var $i=0; $i<$sentenceChildNodes.length; $i++) {
                    var $nodeText = $sentenceChildNodes[$i].data;
                    var cloneNodeText = "";
                    if($nodeText) {
                        for (var i=0; i<$nodeText.length; i++) {
                            var substring = $nodeText.substr(i, 1);
                            if (substring != " ") {
                                cloneNodeText += '<span class="effect_char">' + substring + '</span>';
                            } else {
                                cloneNodeText += substring;
                            }
                        }

                        cloneElementContent = cloneElementContent.replace($nodeText, cloneNodeText);
                    } else {
                        newNodeContent += $sentenceChildNodes[$i].outerHTML;
                    }
                }
                $sentence.html(cloneElementContent);
            });
            
            $('.text_effect').find('.effect_char').each(function(index, e) {
                var time = index / 30;
                $(this).css('transition-delay', time+'s');
                
            });

            $(window).bind('load', function () {
                $('.text_effect').each(function() {
                    $(this).addClass('animate');
                });

            });
        },
        loadPost01: function(){
            $.ajax({
                'url': 'news/_custom/?cat=1&?cat=2&limit=3',
                'dataType': 'jsonp',
                'success': function (json) {

                    $.each(json.data, function (i, val) {
                        var thumb = val.img1 ? $(val.img1).attr('src') : 'images/under_img01.jpg';
                        var $div = $('<li></li>').html(

                            '<a href="news/' + val.url + '">' + '<div class="img"><img src="' + thumb + '" alt="' + val.title + '"> </div>' + '<div class="cnt"><span class="date">' + val.date.substr(0, 4) + '.' + val.date.substr(5, 2) + '.' + val.date.substr(8, 2) + '</span><span class="ttl">' + val.title + '</span><p class="btn_list"><img src="images/ico_arr_list.png" alt="' + val.title + '"></p></div></a>'
                            );

                        $div.appendTo('.box12_list');

                    });

                }
            });
            $.ajax({
                'url': 'cases/_custom/?limit=2',
                'dataType': 'jsonp',
                'success': function (json) {

                    $.each(json.data, function (i, val) {
                        var thumb = val.img1 ? $(val.img1).attr('src') : 'images/under_img01.jpg';
                        var $div = $('<li></li>').html(

                            '<a href="cases/' + val.url + '">' + '<p class="img"><img src="' + thumb + '" alt="' + val.title + '"> </p> ' + ' </a>'
                            );

                        $div.appendTo('.box07_list');

                    });

                }
            });
        },
        loadPost: function(){
            $.ajax({
                'url': 'staff/_custom/?limit=15',
                'dataType': 'jsonp',
                'success': function (json) {

                    $.each(json.data, function (i, val) {
                        var thumb = val.img1 ? $(val.img1).attr('src') : 'images/under_img01.jpg';
                        var $div = $('<li></li>').html(

                            '<a href="staff/' + val.url + '">' + '<div class="img"><img src="' + thumb + '" alt="' + val.title + '"> </div>' + '<div class="cnt"><p class="ttl"><span class="sub_ttl">'+ val.position +'</span>'+ val.title +'</p><p class="btn_list"><img src="images/ico_arr_list.png" alt="' + val.title + '"></p></div></a>'
                            );

                        $div.appendTo('.box10_list');
                    });
                    if ($(".box10_list").length) {
                        if ($(".box10_list li").length < 4) {
                            var sum = 4 - $(".box10_list li").length;
                            for (var i = 1; i <= sum; i++) {
                                $(".box10_list li:nth-child(" + i + ")").clone().appendTo('.box10_list');
                            }
                        }
                        $('.box10_list').slick({
                            autoplay: true,
                            autoplaySpeed: 2000,
                            dots: false,
                            infinite: true,
                            loop:true,
                            slidesToShow: 4,
                            slidesToScroll: 1,
                            pauseOnHover: false,
                            pauseOnFocus: false,
                            prevArrow: $(".arr_click .prev-arrow"),
                            nextArrow: $(".arr_click .next-arrow"),
                            responsive: [
                            {
                              breakpoint: 1440,
                              settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                infinite: true,
                                dots: false
                            }
                        },
                        {
                          breakpoint: 1024,
                          settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: false
                        }
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            ]
        });

                    }

                }
            });
        },

    };

    obj.init();
});


