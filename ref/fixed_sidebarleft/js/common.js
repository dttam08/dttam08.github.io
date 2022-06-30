// JavaScript Document
$(function() {
    "use strict";
    var obj = {
        init: function() {
            this.toTop();
            this.smoothScroll();
            this.iconMenu();
            this.hoverChangeImg();
            this.changeResize();
            this.compare();
            this.fixedAnchor();
            this.hideItemContact();
            this.fixedAside();
        },
        fixedAside: function() {
            function loadNav(asideList, asideItem, divContent, heightHeader) {
                //theia-sticky-sidebar npm
                $(window).on("load", function() {
                    $('.under-aside').stickySidebar({
                        topSpacing: 170,
                        bottomSpacing: 60
                    });
                });

                if (asideList.length) {
                    $(window).on(
                        "load scroll resize orientationchange",
                        function() {
                            var asdiePosition = asideList.offset().top;
                            var arrayHead = [];

                            if (asideItem.length) {
                                // get all href have id
                                $(asideItem).each(function(index, element) {
                                    const url = $(element).attr("href");
                                    arrayHead.push(url);
                                });
                                // loop array
                                $(arrayHead).each(function(index, element) {
                                    if (index < arrayHead.length - 1) {
                                        if ($(element).offset().top - heightHeader < asdiePosition && $(arrayHead[index + 1]).offset().top - heightHeader > asdiePosition) {
                                            asideList
                                                .find("li")
                                                .removeClass("active");
                                            asideList
                                                .find("li")
                                                .eq(index)
                                                .addClass("active");
                                        }
                                    } else {
                                        if (
                                            $(arrayHead[arrayHead.length - 1]).offset().top - heightHeader < asdiePosition
                                        ) {
                                            asideList
                                                .find("li")
                                                .removeClass("active");
                                            asideList
                                                .find("li")
                                                .eq(index)
                                                .addClass("active");
                                        }
                                    }
                                });
                            }
                        }
                    );
                }
            }
            loadNav(
                $(".under-aside-list"),
                $(".under-aside-list a"),
                $(".under-content, .under-aside"),
                180
            );
        },
        fixedAnchor: function() {
            $(window).on("load", function() {
                $(".under-last-text").parent().addClass("sec-last");
                // $(".under-content, .under-aside").theiaStickySidebar({
                //  additionalMarginTop: 200,
                // });
            });
            const btn = $(".under-pulldown-title");
            $(btn).click(function(e) {
                e.preventDefault();
                const par = $(this).parent().toggleClass("active");
                const _this = $(par)
                    .find(".under-pulldown-content")
                    .toggleClass("active");
                if ($(par).hasClass("active")) {
                    $(this).find(".btn-click").text("CLOSE");
                } else {
                    $(this).find(".btn-click").text("CLICK");
                }
            });
        },
        compare: function() {
            $(window).load(function() {
                "use strict";
                if ($(".slide-compare").length > 0) {
                    $(".slide-compare").twentytwenty();
                    $("body").addClass("loaded");
                }
            });
        },
        //totop
        toTop: function() {
            $("#totop").hide();
            $(window).scroll(function() {
                if ($(this).scrollTop() > 100) {
                    $("#totop").fadeIn();
                    $("#header").addClass("sc_fixed");
                } else {
                    $("#totop").fadeOut();
                    $("#header").removeClass("sc_fixed");
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
        //smoothScroll
        smoothScroll: function() {
            $('a[href^="#"]').click(function() {
                if ($($(this).attr("href")).length) {
                    var p = $($(this).attr("href")).offset();

                    if ($(window).width() > 640) {
                        $("html,body").animate({
                                scrollTop: p.top - 200,
                            },
                            600
                        );
                    } else {
                        $("html,body").animate({
                                scrollTop: p.top - 100,
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
                                scrollTop: top01 - 200,
                            },
                            600
                        );
                    } else {
                        $root.animate({
                                scrollTop: top01 - 100,
                            },
                            600
                        );
                    }
                }
            });
            $(window).load(function() {
                // ANCHOR TO MAIL FOMR IF ERROR
                if (
                    $(".error").length ||
                    $(".mw_wp_form_confirm").length ||
                    $(".mw_wp_form_thanks").length
                ) {
                    var p = $("#form1").offset();
                    if ($(window).width() > 750) {
                        $("html,body").animate({ scrollTop: p.top - 270 });
                    } else {
                        $("html,body").animate({ scrollTop: p.top - 70 });
                    }
                }
            });
            $(window).load(function() {
                var hash1 = location.hash;
                if ($(".under-pulldown").length) {
                    if (hash1 !== "") {
                        $(hash1).parent().addClass("active");
                        if ($(hash1).parent().hasClass("active")) {
                            $(hash1).parent().find(".btn-click").text("CLOSE");
                        } else {
                            $(hash1).parent().find(".btn-click").text("CLICK");
                        }

                        $(hash1).next().addClass("active");
                    }
                }
            });

            $(window).load(function() {
                var hash1 = location.hash;
                var $root = $("html, body");
                if (hash1 !== "") {
                    var top01 = $(hash1).offset().top;
                    if ($(window).width() > 640) {
                        $root.animate({
                                scrollTop: top01 - 200,
                            },
                            600
                        );
                    } else {
                        $root.animate({
                                scrollTop: top01 - 100,
                            },
                            600
                        );
                    }
                }
            });
        },

        //sp gnavi
        iconMenu: function() {
            $(".icon_menu.open").click(function() {
                $(".icon_menu.closes").toggleClass("active");
                $(".icon_menu.open").fadeOut();
                $("#gnavi").slideToggle();
                $(".over").css("overflow", "hidden");
            });

            //butn closes
            $(".icon_menu.closes").click(function() {
                $(".icon_menu.closes").toggleClass("active");
                $(".icon_menu.open").fadeIn();
                $("#gnavi").slideToggle();
                $("#gnavi .wrap_sub").removeAttr("style");
                $(".gnavi_pc > li > label").removeClass("active");
                $(".over").css("overflow", "auto");
            });
            //last close
            $("#gnavi #close").click(function() {
                $("#gnavi").slideUp(600);
                $(".icon_menu").removeClass("active");
                $("#gnavi .wrap_sub").removeAttr("style");
                $("#gnavi .has > label").removeClass("active");
            });

            $(window).bind("load resize", function() {
                var w = $(window).width();
                $(".has > label").removeClass("active");

                if (w > 750) {
                    $(".sub").removeAttr("style");
                    $("#gnavi .has > label").removeClass("active");
                    $(".icon_menu").removeClass("active");
                    $("#gnavi").removeAttr("style");
                } else {}
            });
        },
        //Hover change images
        hoverChangeImg: function() {
            $(".box06_list li").mouseenter(function() {
                var data = $(this).attr("data-img");
                if ($(this).hasClass("flag")) {
                    return false;
                } else {
                    $(".box06_item").removeClass("active");
                    $(".box06_list li").removeClass("active");
                    $(this).addClass("active");
                    $(this)
                        .parentsUntil("box06_item")
                        .find(".box06_item.i" + data)
                        .toggleClass("active");
                }
            });
            $(".box06_list li").mouseleave(function() {
                var data = $(this).attr("data-img");
                if ($(this).hasClass("flag")) {
                    return false;
                } else {
                    $(this)
                        .parentsUntil("box06_bg")
                        .find(".box06_item.i" + data)
                        .removeClass("active");
                    $(this)
                        .parentsUntil("box06_bg")
                        .find(".box06_item.i01")
                        .addClass("active");
                    $(this).removeClass("active");
                }
            });
            $(window).bind("load resize", function() {
                var vW = $(window).width();
                if (vW > 750) {
                    $(".box06_list li").removeClass("flag");
                    $(".menu_icon").removeClass("active");
                } else {
                    $(".box06_list li").addClass("flag");
                }
            });
            $(".box06_list li").click(function() {
                if ($(this).hasClass("flag")) {
                    var data = $(this).attr("data-img");
                    $(".box06_item").removeClass("active");
                    $(".box06_list li").removeClass("active");
                    $(this).addClass("active");
                    $(this)
                        .parentsUntil("box06_bg")
                        .find(".box06_item.i" + data)
                        .addClass("active");
                }
            });
        },
        ///sliderbar_fix

        changeResize: function() {
            $(window).bind("load scroll", function() {
                var mainvi = $("#mainvisual").outerHeight();
                var pTop = $(this).scrollTop();
                var bottom = $(".sliderbar_fix").outerHeight();
                var hHead = $("#header").outerHeight();
                var ww = $(window).width();

                if (ww <= 750) {
                    if (pTop > hHead) {
                        $("#header").addClass("idx_bg");
                    } else {
                        $("#header").removeClass("idx_bg");
                    }
                    if (pTop > mainvi) {
                        $(".sliderbar_fix").fadeIn();
                        $(".copyright").css({
                            "margin-bottom": bottom,
                        });
                    } else {
                        $(".sliderbar_fix").fadeOut();
                        $(".copyright").removeAttr("style");
                    }
                } else {
                    $(".sliderbar_fix").hide();
                    $(".copyright").removeAttr("style");
                }
            });
            // $(window).bind('load scroll', function () {

            var ww = $(window).width();
            if (ww > 750) {
                $(".has").mouseenter(function() {
                    if ($(this).hasClass("flag")) {
                        return false;
                    } else {
                        $("#header").addClass("over");
                        $(this).find(".wrap_sub").stop().fadeIn(200);
                    }
                });
                $(".has").mouseleave(function() {
                    if ($(this).hasClass("flag")) {
                        return false;
                    } else {
                        $(this).find(".wrap_sub").stop().fadeOut(200);
                        $("#header").removeClass("over");
                    }
                });
                $(".menu03").mouseenter(function() {
                    if ($(this).hasClass("flag")) {
                        return false;
                    } else {
                        $("#header").addClass("over02");
                        $(this).find(".wrap_sub").stop().fadeIn(200);
                    }
                });
                $(".menu03").mouseleave(function() {
                    if ($(this).hasClass("flag")) {
                        return false;
                    } else {
                        $(this).find(".wrap_sub").stop().fadeOut(200);
                        $("#header").removeClass("over02");
                    }
                });
            } else {
                $("#gnavi .has > label").click(function() {
                    $(this).toggleClass("active");
                    $(this).next(".wrap_sub").stop().slideToggle();
                });
            }
        },
        hideItemContact: function() {
            $(window).on("load", function() {
                if ($(".mw_wp_form_confirm").length) {
                    if ($(".inputZipcode input").val() == "") {
                        $(".postal_txt").hide();
                    } else {
                        $(".postal_txt").removeAttr("style");
                    }
                }
            });
            $(window).on("load", function() {
                if ($(".ct_select").length) {
                    $(".ct_select option").first().html("é¸æŠžã—ã¦ãã ã•ã„");
                }
            });
            if ($("#zip01").length) {
                $("#zip01").keyup(function() {
                    AjaxZip3.zip2addr(this, "", "address_1", "address_2");
                });
            }
        },
    };

    obj.init();
});



$(document).ready(function() {
    "use strict";

    // ACCORDION
    $('.accordion-ttl').click(function() {
        var id = $(this).data('accordion-id');
        var group = $(this).data('group');
        $('[data-group="' + group + '"][data-accordion-id!="' + id + '"]').removeClass('active');
        $('[data-group="' + group + '"].accordion-content').stop().slideUp(200);
        $(this).toggleClass('active');
        $('[data-group="' + group + '"][data-accordion-content="' + id + '"]').stop().slideToggle(200);
    });


    // SELECT PREF
    function filterAddress(changing) {
        var pref = $('#prefectures').val();
        $('#city option').hide();
        $('#city option[data-pref="' + pref + '"]').show();
        if (changing == true) {
            $('#city').val($('#city option[data-pref="' + pref + '"]')[0].value);
        }
    }

    $('#prefectures').change(function() {
        filterAddress(true);
    });
    $(window).load(function() {
        filterAddress(false);
    });


    //  if ($(".under-aside-list").length) {
    //      var asideList = $(".under-aside-list");
    //      $(window).on("load scroll resize orientationchange", function () {
    //          var nav_pos = asideList.offset().top;
    //          const countList = $(".under-aside-list a");
    //          var arrayHead = [];
    //          if (countList.length) {
    //              $(countList).each(function (index, element) {
    //                  const url = $(element).attr("href");
    //                  arrayHead.push(url);
    //              });
    //              $(arrayHead).each(function (index, element) {
    //                  if (index < arrayHead.length - 1) {
    //                      if (
    //                          $(element).offset().top - 100 < nav_pos &&
    //                          $(arrayHead[index + 1]).offset().top - 100 > nav_pos
    //                      ) {
    //                          asideList.find("li").removeClass("active");
    //                          asideList.find("li").eq(index).addClass("active");
    //                      }
    //                  } else {
    //                      if (
    //                          $(arrayHead[arrayHead.length - 1]).offset().top -
    //                              100 <
    //                          nav_pos
    //                      ) {
    //                          asideList.find("li").removeClass("active");
    //                          asideList.find("li").eq(index).addClass("active");
    //                      }
    //                  }
    //              });
    //          }
    //      });
    //  }
	
});