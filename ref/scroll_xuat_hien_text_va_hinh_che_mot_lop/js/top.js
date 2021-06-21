// JavaScript Document
$(function () {
  "use strict";
  var obj = {
    init: function () {
      this.verGnavi();
      this.TopSlide();
    },

    verGnavi: function () {
      var contentSection = $('.content-section');
      var navigation = $('nav');

      //when a nav link is clicked, smooth scroll to the section
      navigation.on('click', 'a', function (event) {
        event.preventDefault(); //prevents previous event
        smoothScroll($(this.hash));
      });

      //update navigation on scroll...
      $(window).on('scroll', function () {
        updateNavigation();
      });
      //...and when the page starts
      updateNavigation();

      /////FUNCTIONS
      function updateNavigation() {
        contentSection.each(function () {
          var sectionName = $(this).attr('id');
          var navigationMatch = $('nav li a[href="#' + sectionName + '"]');
          if (($(this).offset().top - $(window).height() / 2 < $(window).scrollTop())
            && ($(this).offset().top + $(this).height() - $(window).height() / 2 > $(window).scrollTop())) {
            navigationMatch.addClass('active-section');
          } else {
            navigationMatch.removeClass('active-section');
          }
        });
      }

      function smoothScroll(target) {
        $('body,html').animate({
          scrollTop: target.offset().top
        }, 800);
      }
      $('.menu-icon').click(function () {
        $(this).toggleClass('active');
        $('#gnavi').stop().toggleClass('open');
      });
      $('.close-menu').click(function () {
        $('.menu-icon').removeClass('active');
        $('#gnavi').stop().removeClass('open');
      });
    },

    TopSlide: function () {
      $('.b04-profile-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.b04-profile-thumb'
      });
      $('.b04-profile-thumb').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.b04-profile-main',
        dots: false,
        arrows: false,
        focusOnSelect: true
      });

    },

  };

  obj.init();

});
