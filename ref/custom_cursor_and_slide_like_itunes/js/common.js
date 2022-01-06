// JavaScript Document
$(function() {
    "use strict";
    var obj = {
        init: function() {
            this.changeSizeVideo();
            this.toTop();
            this.smoothScroll();
            this.gnavi();
            this.customCursor();
            this.popup();
            this.playVideo();
        },
        toTop: function() {
            $("#totop").hide();
            $(window).scroll(function() {
                if ($(this).scrollTop() > 100) {
                    $("#totop").fadeIn();
                    $(".contact_fixed").addClass("active");
                } else {
                    $("#totop").fadeOut();
                    $(".contact_fixed").removeClass("active");
                }
            });
            $("#totop a").click(function() {
                $("body,html").animate({
                        scrollTop: 0,
                    },
                    500
                );
                return false;
            });
        },
        smoothScroll: function() {
            $('a[href^="#"]').click(function() {
                if ($($(this).attr("href")).length) {
                    var p = $($(this).attr("href")).offset();
                    if ($(window).width() > 640) {
                        $("html,body").animate({
                                scrollTop: p.top - 60,
                            },
                            600
                        );
                    } else {
                        $("html,body").animate({
                                scrollTop: p.top - 90,
                            },
                            600
                        );
                    }
                }
                return false;
            });
            $(window).load(function() {
                var hash1 = location.hash;
                var $root = $("html, body");
                if (hash1 !== "") {
                    var top01 = $(hash1).offset().top;
                    if ($(window).width() > 640) {
                        $root.animate({
                                scrollTop: top01 - 60,
                            },
                            600
                        );
                    } else {
                        $root.animate({
                                scrollTop: top01 - 90,
                            },
                            600
                        );
                    }
                }
            });
        },
        gnavi: function() {
            $(".icon_menu").click(function() {
                $(this).toggleClass("active");
                $("#gnavi").toggleClass("open");
                $(".submenu").slideUp();
                $(".over").removeClass("active");
            });

            $(".over").click(function() {
                var widthScreen = $(window).width();
                if (widthScreen < 641) {
                    $(this).toggleClass("active");
                    $(this).find(".submenu").slideToggle();
                }
            });

            $(window).bind("load resize", function() {
                var widthScreen = $(window).width();
                if (widthScreen > 640) {
                    $(".over, .submenu").removeAttr("style");
                    $(".icon_menu").removeClass("active");
                    $("#gnavi").removeClass("open");
                }
            });
        },
        customCursor: function() {
            $(window).bind("load resize", function() {
                var widthScreen = $(window).width(),
                    $cursor = $("#cursor"),
                    $cursor_link = $(".cursor_link");

                if (widthScreen > 640) {
                    $(window).mousemove(function(e) {
                        $cursor.css({
                            top: e.clientY - $cursor.height() / 2,
                            left: e.clientX - $cursor.width() / 2,
                        });
                    });

                    $cursor_link.removeClass("active");
                    $cursor_link.on("touchstart", function() {
                        $(this).addClass("active");
                    });

                    $cursor_link
                        .mouseenter(function() {
                            if (!$(this).hasClass("active")) {
                                $cursor.css({
                                    transform: "scale(1)",
                                });
                            }
                        })
                        .mouseleave(function() {
                            $cursor.css({
                                transform: "scale(0)",
                            });
                        });
                } else {
                    $(".cursor_link").mouseenter(function() {
                        $cursor.css({
                            transform: "scale(0)",
                        });
                    });
                }
            });
        },
        popup: function() {
            const btn = document.querySelector("#closePopup");
            const btn2 = document.querySelector("#closeTop");
            const popup = document.querySelector("#popup_top");
            const open = document.querySelector("#openPopup");
            if (popup) {
                $(window).bind("load", function() {
                    setTimeout(function() {
                        popup.classList.remove("active");
                    }, 1000);
                });
            }
            if (btn) {
                btn.addEventListener("click", function() {
                    popup.classList.toggle("active");
                });
                btn2.addEventListener("click", function() {
                    popup.classList.toggle("active");
                });
                open.addEventListener("click", function() {
                    popup.classList.toggle("active");
                });
            }
        },
        changeSizeVideo: function() {
            const video = document.querySelector(".ib_row video");
            const img = document.querySelector(".ib_row img");
            if (video) {
                $(window).bind("load resize", function() {
                    if ($(window).width() > 640) {
                        var hh = $(video).height();
                        $(img).css("height", hh);
                        $(img).css("width", hh / 2.09051724138);
                    } else {
                        $(img).removeAttr("style");
                    }
                });
            }
        },
        playVideo: function() {
            const btn = $("#ibPlay");
            const video = $(".ib_row video");
            if (btn) {
                var mediaVideo = $(".ib_row video").get(0);
                $(video).click(function() {
                    if (mediaVideo.paused) {
                        $(btn).addClass("active");
                    } else {
                        $(btn).removeClass("active");
                    }
                });
                $(btn).click(function() {
                    if (mediaVideo.paused) {
                        mediaVideo.play();
                        $(btn).addClass("active");
                    } else {
                        mediaVideo.pause();
                        $(btn).removeClass("active");
                    }
                });
            }
        },
    };

    obj.init();
});