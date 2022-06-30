$(function () {
    "use strict";
    var obj = {
        init: function () {
            this.smoothScroll();
            this.toTop();
            this.Gnavi();
            this.loadFont();
            this.changeTab();
        },
        smoothScroll: function () {
            $('a[href^="#"]').click(function () {
                if ($($(this).attr('href')).length) {
                    var p = $($(this).attr('href')).offset();
                    if ($(window).width() > 640) {

                        $('html,body').animate({
                            scrollTop: p.top - 210
                        }, 600);

                    } else {
                        $('html,body').animate({
                            scrollTop: p.top - 100
                        }, 600);
                    }
                }
                return false;
            });
            //anchor link
            $(window).on('load', function () {

                var hash1 = location.hash;
                var $root = $('html, body');
                if (hash1 !== "" || hash1.length) {
                    var top01 = $(hash1).offset().top;
                    if ($(window).width() > 640) {
                        $root.animate({
                            scrollTop: top01 - 210
                        }, 600);
                    } else {
                        $root.animate({
                            scrollTop: top01 - 200
                        }, 600);
                    }
                }
            });
        },
        toTop: function () {
            $("#totop").hide();
            $(window).on("load scroll", function () {
                if ($(this).scrollTop() > 100) {
                    $('#totop').fadeIn();
                    var vW = $(window).width();
                    var fCallH = $(".f_call").outerHeight();
                    if (vW < 641) {
                        $('.f_call').addClass('show');
                        $("#footer").css("paddingBottom", fCallH)
                    } else {
                        $('.f_call').removeClass('show');
                        $("#footer ").css("paddingBottom", '');


                    }
                } else {
                    $('#totop').fadeOut();
                    $('.f_call').removeClass('show');
                }
            });
        },
        Gnavi: function () {
            $('.over').mouseenter(function () {
                if ($(this).hasClass('flag')) {
                    return false;
                } else {
                    $(this).find('.sub-menu').stop().slideDown();
                }
            });
            $('.over').mouseleave(function () {
                if ($(this).hasClass('flag')) {
                    return false;
                } else {
                    $(this).find('.sub-menu').stop().slideUp();
                }
            });
            $('.over').click(function () {
                if ($(this).hasClass('flag')) {
                    if ($(this).hasClass('active')) {
                        $('.sub-menu').stop().slideUp();
                        $(this).removeClass('active');
                    } else {
                        $('.over').removeClass('active');
                        $('.sub-menu').stop().slideUp();
                        $(this).addClass('active');
                        $(this).find('.sub-menu').stop().slideToggle();
                    }
                }
            });
            $('.menu-icon').click(function () {
                if ($(this).hasClass('active')) {
                    $('.menu-icon').removeClass('active');
                    $('#gnavi').slideUp();
                    $('.sub-menu').stop().slideUp();
                    $('.over').removeClass('active');
                } else {
                    $(this).toggleClass('active');
                    $('#gnavi').stop().slideToggle(300);
                }
            });


            $(window).bind('resize load scroll', function () {
                var vW = $(window).width();
                var pTop = $(this).scrollTop();
                var headerH = $("#header").outerHeight();
                if (vW <= 640) {
                    $('.gnavi-ctn a[href^="#"]').click(function () {
                        $('#gnavi').removeAttr('style');
                        $('.menu-icon').removeClass('active');
                    });
                }
            });
            $(window).bind("load resize", function () {
                var vW = $(window).width();
                if (vW < 641) {
                    var headerH = $("#header").outerHeight();
                    $("#mainvisual, .under .mainvisual").css("marginTop", headerH);
                } else {
                    $("#mainvisual, .under .mainvisual").removeAttr('style');
                }

            })
            $(window).bind("load resize", function () {
                var vW = $(window).width();
                if (vW > 640) {
                    $(".menu-icon").removeClass('active')
                    $('.over').removeClass('flag');
                    $('.over').removeClass('active');
                    $('.sub-menu').removeAttr('style');

                } else {
                    $('.over').addClass('flag');
                    $('.over').removeClass('active');
                    $('.sub-menu').removeAttr('style');
                }
            });

        },
        loadFont: function () {
            $(window).load(function () {
                "use strict";
                $('link[data-href]').each(function () {
                    $(this).attr('href', $(this).attr('data-href'));
                });
            });
        },
        changeTab: function () {
            $(".reason-menu-tab a").on('click', function () {
                $(".reason-menu-tab a").removeClass("active");
                $(".reason-tab-ctn .tab-ctn").removeClass("show");
                var id = $(this).attr("data-tab");
                $(this).addClass("active");
                $("#" + id).addClass("show");
            })
        },
    };
    obj.init();
});
document.addEventListener("DOMContentLoaded", function () {
    var e, n;
    if ("IntersectionObserver" in window) {
        console.log("IntersectionObserver"),
            e = document.querySelectorAll(".lazy");
        var o = new IntersectionObserver(function (e, t) {
            e.forEach(function (e) {
                if (e.isIntersecting) {
                    var t = e.target;
                    t.src = t.dataset.src,
                        t.style = t.dataset.style,
                        t.classList.remove("lazy"),
                        o.unobserve(t)
                }
            })
        });
        e.forEach(function (e) {
                o.observe(e)
            }),
            n = document.querySelectorAll(".iframe-lazy");
        var r = new IntersectionObserver(function (e, t) {
            e.forEach(function (e) {
                if (e.isIntersecting) {
                    var t = e.target;
                    t.src = t.dataset.src,
                        t.classList.remove("iframe-lazy"),
                        r.unobserve(t)
                }
            })
        });
        n.forEach(function (e) {
            r.observe(e)
        })
    } else {
        var t;
        e = document.querySelectorAll(".lazy");
        var i, s = Array.prototype.slice.call(e);

        function a() {
            t && clearTimeout(t),
                t = setTimeout(function () {
                    var t = window.pageYOffset;
                    s.forEach(function (e) {
                            e.offsetTop < window.innerHeight + t && (e.src = e.dataset.src,
                                e.classList.remove("lazy"))
                        }),
                        0 == s.length && (document.removeEventListener("scroll", a),
                            window.removeEventListener("resize", a),
                            window.removeEventListener("orientationChange", a))
                }, 20)
        }
        document.addEventListener("scroll", a),
            window.addEventListener("resize", a),
            window.addEventListener("orientationChange", a),
            n = document.querySelectorAll(".iframe-lazy");
        var c = Array.prototype.slice.call(n);

        function n() {
            i && clearTimeout(i),
                i = setTimeout(function () {
                    var t = window.pageYOffset;
                    c.forEach(function (e) {
                            e.offsetTop < window.innerHeight + t && (e.src = e.dataset.src,
                                e.classList.remove("lazy"))
                        }),
                        0 == c.length && (document.removeEventListener("scroll", n),
                            window.removeEventListener("resize", n),
                            window.removeEventListener("orientationChange", n))
                }, 20)
        }
        document.addEventListener("scroll", n),
            window.addEventListener("resize", n),
            window.addEventListener("orientationChange", n)
    }
});
