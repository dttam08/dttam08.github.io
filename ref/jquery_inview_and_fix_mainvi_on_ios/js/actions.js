$(document).ready(function () {
  "use strict";
  $('.b02-itm-img.idx-img').bind('inview', function (event, visible) {
    if (visible === true) {
      $('.b02-itm-img.idx-img').addClass('action');
    }
  });
  $('.b04-item.idx-img').bind('inview', function (event, visible) {
    if (visible === true) {
      $('.b04-item.idx-img').addClass('action');
    }
  });
  $('.b06-list.idx-img').bind('inview', function (event, visible) {
    if (visible === true) {
      $('.b06-list.idx-img').addClass('action');
    }
  });
  $('.b07-img.idx-img').bind('inview', function (event, visible) {
    if (visible === true) {
      $('.b07-img.idx-img').addClass('action');
    }
  });

});
