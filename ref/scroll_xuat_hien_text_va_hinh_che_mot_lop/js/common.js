// JavaScript Document
$(function () {
  "use strict";
  var obj = {
    init: function () {
      this.smoothScroll();
    },

    smoothScroll: function () {
      $('a[href^="#"]').click(function () {
        if ($($(this).attr('href')).length) {
          var p = $($(this).attr('href')).offset();
          if ($(window).width() > 640) {
            $('html,body').animate({
              scrollTop: p.top - 70
            }, 600);
          } else {
            $('html,body').animate({
              scrollTop: p.top - 99
            }, 600);
          }
        }
        return false;
      });
      $(window).load(function () {
        var hash1 = location.hash;
        var $root = $('html, body');
        if (hash1 !== "") {
          var top01 = $(hash1).offset().top;
          if ($(window).width() > 640) {
            $root.animate({
              scrollTop: top01 - 80
            }, 600);
          } else {
            $root.animate({
              scrollTop: top01 - 99
            }, 600);
          }
        }
      });

    },


  };

  obj.init();

});
$(document).ready(function () {
  "use strict";
  $('.box02 .idx-h3').bind('inview', function (event, visible) {
    if (visible === true) {
      $('.box02 .idx-h3').addClass('action');
    }
  });
  $('.box02 .idx-ttl').bind('inview', function (event, visible) {
    if (visible === true) {
      $('.box02 .idx-ttl').addClass('action');
    }
  });
  $('.b02-txt').bind('inview', function (event, visible) {
    if (visible === true) {
      $('.b02-txt').addClass('action');
    }
  });
  $('.b02-img li').bind('inview', function (event, visible) {
    if (visible === true) {
      $('.b02-img li').addClass('action');
    }
  });
  $('.box03 .idx-h3').bind('inview', function (event, visible) {
    if (visible === true) {
      $('.box03 .idx-h3').addClass('action');
    }
  });
  $('.box03 .idx-ttl').bind('inview', function (event, visible) {
    if (visible === true) {
      $('.box03 .idx-ttl').addClass('action');
    }
  });
  $('.b03-txt p').bind('inview', function (event, visible) {
    if (visible === true) {
      $('.b03-txt p').addClass('action');
    }
  });
  $('.box04 .idx-h3').bind('inview', function (event, visible) {
    if (visible === true) {
      $('.box04 .idx-h3').addClass('action');
    }
  });
  $('.box04 .viewtext').bind('inview', function (event, visible) {
    if (visible === true) {
      $('.box04 .viewtext').addClass('action');
    }
  });
  $('.b04-info dl').bind('inview', function (event, visible) {
    if (visible === true) {
      $('.b04-info dl').addClass('action');
    }
  });
  $('.b04-profile .viewtext').bind('inview', function (event, visible) {
    if (visible === true) {
      $('.b04-profile .viewtext').addClass('action');
    }
  });
  $('.b04-profile-list .viewimg').bind('inview', function (event, visible) {
    if (visible === true) {
      $('.b04-profile-list .viewimg').addClass('action');
    }
  });
  $('.box05 .viewtext').bind('inview', function (event, visible) {
    if (visible === true) {
      $('.box05 .viewtext').addClass('action');
    }
  });
  $('.b05-main .viewtext').bind('inview', function (event, visible) {
    if (visible === true) {
      $('.b05-main .viewtext').addClass('action');
    }
  });
});
