$(document).ready(function () {
    $(window).bind('resize load', function () {
        $('.idx_loading .lettering_01')
        .textillate({ in: { effect: 'fadeIn' ,   delay: 100,} });
      });
  });
  $(window).load(function() {
    function Preloader() {
        var preloader = $ ('.idx_loading');
        preloader.delay(4000).fadeOut(500);
        var preloader = $('.idx_load_logo');
        preloader.delay(4500).slideUp(500);
    }
    if ( ! sessionStorage.getItem( 'doNotShow' ) ) {
        sessionStorage.setItem( 'doNotShow', 'true' );
        $('.idx_loading').addClass('show');
        $('.idx_loading .load_logo').fadeIn(500);
        $('.index #header').addClass('show');
        $('.idx_mv').addClass('show');
        Preloader();
    } else {
       $('.idx_loading, .idx_load_logo').hide();
       setTimeout(function () {
        $('.index #header').addClass('show');
          $('.idx_mv').addClass('show');
        }, 800);
    }

});