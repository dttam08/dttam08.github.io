$(function () {
  "use strict";
  var obj = {
    init: function () {
      this.TopJS();
    },

    TopJS: function () {
      var x = 0;
      setInterval(function(){
        x-=1;
        $('.b06-bg01').css({'background-position': x +'px'+' 0'});
      }, 50);
      
      $('.main-slide').slick({
        dots: false,
        autoplaySpeed: 5000,
        arrows: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        slidesToShow: 1,
        pauseOnFocus: false,
        pauseOnHover: false,
        fade: true,
        cssEase: 'linear'
      });
      $('.main-slide').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.main-slide .slick-current').removeClass('itmactive');
      });
			$('.main-slide').on('afterChange', function(event, slick, currentSlide, nextSlide){
				$('.main-slide .slick-current').addClass('itmactive');
			});
			$('.main-slide .slick-current').addClass('itmactive');
      
      $.ajax({
        'url': 'course/_custom/?limit=3&cat=1',
        'dataType': 'jsonp',
        'success': function (json) {
          $.each(json.data, function (i, val) {
            var coursettl = val.title.length < 50 ? val.title : val.title.substr(0, 50) + '...';
            var img = "";
            if (val.img1 !== "") {
              img = $(val.img1).attr('src');
            } else {
              if (val.img2 !== "") {
                img = $(val.img2).attr('src');
              } else {
                if (val.img3 !== "") {
                  img = $(val.img3).attr('src');
                } else {
                  if (val.img4 !== "") {
                    img = $(val.img4).attr('src');
                  } else {
                    if (val.img5 !== "") {
                      img = $(val.img5).attr('src');
                    } else {
                      if (val.img6 !== "") {
                        img = $(val.img6).attr('src');
                      } else {
                        if (val.img7 !== "") {
                          img = $(val.img7).attr('src');
                        } else {
                          if (val.img8 !== "") {
                            img = $(val.img8).attr('src');
                          } else {
                            if (val.img9 !== "") {
                              img = $(val.img9).attr('src');
                            } else {
                              if (val.img10 !== "") {
                                img = $(val.img10).attr('src');
                              } else {
                                img = "images/under_img01.jpg";
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            var $li = $('<li/>').html(
              '<a href="course/' + val.url + '"><p class="b08-itm-img"><img src="' + img + '" alt="' + val.title + '" ></p>'
              + '<p class="b08-itm-ttl"><span class="b08-itm-date">' + val.date.substr(0, 4) + '.' + val.date.substr(5, 2) + '.' + val.date.substr(8, 2) + '</span><span class="b08-itm-ttlfull">' + coursettl + '</span></p></a>'
            );
            $li.appendTo('.b08-cate01');

          });
        }
      });

      $.ajax({
        'url': 'course/_custom/?limit=3&cat=2',
        'dataType': 'jsonp',
        'success': function (json) {
          $.each(json.data, function (i, val) {
            var coursettl = val.title.length < 50 ? val.title : val.title.substr(0, 50) + '...';
            var img = "";
            if (val.img1 !== "") {
              img = $(val.img1).attr('src');
            } else {
              if (val.img2 !== "") {
                img = $(val.img2).attr('src');
              } else {
                if (val.img3 !== "") {
                  img = $(val.img3).attr('src');
                } else {
                  if (val.img4 !== "") {
                    img = $(val.img4).attr('src');
                  } else {
                    if (val.img5 !== "") {
                      img = $(val.img5).attr('src');
                    } else {
                      if (val.img6 !== "") {
                        img = $(val.img6).attr('src');
                      } else {
                        if (val.img7 !== "") {
                          img = $(val.img7).attr('src');
                        } else {
                          if (val.img8 !== "") {
                            img = $(val.img8).attr('src');
                          } else {
                            if (val.img9 !== "") {
                              img = $(val.img9).attr('src');
                            } else {
                              if (val.img10 !== "") {
                                img = $(val.img10).attr('src');
                              } else {
                                img = "images/under_img01.jpg";
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            var $li = $('<li/>').html(
              '<a href="course/' + val.url + '"><p class="b08-itm-img"><img src="' + img + '" alt="' + val.title + '" ></p>'
              + '<p class="b08-itm-ttl"><span class="b08-itm-date">' + val.date.substr(0, 4) + '.' + val.date.substr(5, 2) + '.' + val.date.substr(8, 2) + '</span><span class="b08-itm-ttlfull">' + coursettl + '</span></p></a>'
            );
            $li.appendTo('.b08-cate02');

          });
        }
      });
      
      
      particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#ffffff"
      }
    },
    "opacity": {
      "value": 0.2,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 8.017060304327615,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 12.181158184520175,
        "size_min": 0.1,
        "sync": true
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.2,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
    },


  };

  obj.init();
  
});
