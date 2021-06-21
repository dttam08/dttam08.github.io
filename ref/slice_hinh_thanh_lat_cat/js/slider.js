
  var dfv = {
        overClass           : "btn",
        notOverClass        : "noBt",
        overChar                : "_s2",
        ua                      : null,
        hash                    : null
    };

    $.checkUserAgent = function(ua){
        if( dfv.ua === null ) dfv.ua = navigator.userAgent;
        if( ua.indexOf( "MSIE" ) !== -1 ){
            if( dfv.ua.indexOf( "MSIE" ) !== -1 ){
                var ie = (function(){
                    var undef, v = 3, div = document.createElement('div'), all = div.getElementsByTagName('i');
                    while( div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->', all[0] );
                    return v > 4 ? v : undef;
                }()), ieVer = "MSIE " +  ie;
                if( ieVer.indexOf( ua ) !== -1 ){ return true; } else { return false; }
            } else { return false; }
        } else if( dfv.ua.indexOf( ua ) !== -1 ){ return true; } else { return false; }
    };

    // mv photo gallery
    (function() {
        var $win = $(window),
            $body = $("body"),
            $tgs = $("#mv-pg"),
            tgCls = "pg",
            _tgCls = "." + tgCls,
            imgW = 1920,
            ingH = 1080,
            pgSetting = function() {
                var $tg = $(this),
                    $pgs = $tg.children(),
                    chil_num = $pgs.length,
                    initPg = function() {
                        var $child = $(this),
                            thi_src = $child.find("img").attr("src"),
                            pgTag = '<span class="' + tgCls + '" style="background-image: url(' + thi_src + ')"></span>';
                        $child.html("");
                        $child.append(pgTag).append(pgTag).append(pgTag).append(pgTag).append(pgTag).append(pgTag);
                        $child.find(_tgCls).css({
                            width: 0
                        });
                        $child.css({
                            opacity: 1
                        });
                    },
                    setRatio = function() {
                        var ratio = $tg.width() / imgW,
                            ratioH = ingH * ratio,
                            chilW = $tg.width() / 6;
                        if (ratioH > $tg.height()) {
                            $tg.find(_tgCls).css({
                                "background-size": $tg.width() + "px"
                            });
                            $tg.find(_tgCls + ":nth-child(1)").css({
                                "background-position": "0px center"
                            });
                            $tg.find(_tgCls + ":nth-child(2)").css({
                                "background-position": "-" + chilW + "px center"
                            });
                            $tg.find(_tgCls + ":nth-child(3)").css({
                                "background-position": "-" + (chilW * 2) + "px center"
                            });
                            $tg.find(_tgCls + ":nth-child(4)").css({
                                "background-position": "-" + (chilW * 3) + "px center"
                            });
                            $tg.find(_tgCls + ":nth-child(5)").css({
                                "background-position": "-" + (chilW * 4) + "px center"
                            });
                            $tg.find(_tgCls + ":nth-child(6)").css({
                                "background-position": "-" + (chilW * 5) + "px center"
                            });
                        } else {
                            var ratioW = $tg.height() / ingH,
                                remainder = (ratioW * imgW) - $tg.width(),
                                H_remainder = remainder / 2;
                            $tg.find(_tgCls).css({
                                "background-size": "auto " + $tg.height() + "px"
                            });
                            $tg.find(_tgCls + ":nth-child(1)").css({
                                "background-position": "-" + H_remainder + "px center"
                            });
                            $tg.find(_tgCls + ":nth-child(2)").css({
                                "background-position": "-" + (chilW + H_remainder) + "px center"
                            });
                            $tg.find(_tgCls + ":nth-child(3)").css({
                                "background-position": "-" + ((chilW * 2) + H_remainder) + "px center"
                            });
                            $tg.find(_tgCls + ":nth-child(4)").css({
                                "background-position": "-" + ((chilW * 3) + H_remainder) + "px center"
                            });
                            $tg.find(_tgCls + ":nth-child(5)").css({
                                "background-position": "-" + ((chilW * 4) + H_remainder) + "px center"
                            });
                            $tg.find(_tgCls + ":nth-child(6)").css({
                                "background-position": "-" + ((chilW * 5) + H_remainder) + "px center"
                            });
                        }
                    },
                    setAnimetion = function() {
                        var startTopAnime = function() {
                                TweenMax.to("#nav", 1, {
                                    left: 0,
                                    ease: Power2.easeOut
                                });
                                TweenMax.to("#lines .line", 1, {
                                    delay: 1,
                                    height: "100vh",
                                    ease: Power2.easeOut
                                });
                                TweenMax.to("#nav", 0, {
                                    delay: 2,
                                    onComplete: startPgAnimation
                                });
                                TweenMax.to("#nav", 0, {
                                    delay: 2.5,
                                    onComplete: function() {
                                        $body.addClass("start");
                                    }
                                });
                                TweenMax.to("#top-logo", 1, {
                                    opacity: 1,
                                    delay: 3.5,
                                    ease: Power2.easeOut
                                });
                                TweenMax.to("#top-copy", 0, {
                                    opacity: 1,
                                    delay: 4,
                                    ease: Power2.easeOut,
                                    onComplete: function() {
                                        $("#top-copy").css({
                                            opacity: 1
                                        }).jatickerStart();
                                    }
                                });
                                TweenMax.to("#side_nav", 1, {
                                    right: "2.5rem",
                                    delay: 4,
                                    ease: Power2.easeOut
                                });
                            },
                            startPgAnimation = function() {
                                var nowPlay = -1,
                                    zindex = 1;
                                var next = function() {
                                        nowPlay++;
                                        if (nowPlay == chil_num)
                                            nowPlay = 0;
                                        var $_atgs = $pgs.eq(nowPlay),
                                            $atgs = $_atgs.find(_tgCls);
                                        if (!$.checkUserAgent("Edge") && !$.checkUserAgent("Trident"))
                                            TweenMax.set($_atgs, {
                                                scale: 1
                                            });
                                        TweenMax.set($atgs, {
                                            width: 0,
                                            "margin-left": "4rem"
                                        });
                                        $_atgs.css({
                                            "z-index": zindex++
                                        });
                                        if (!$.checkUserAgent("Edge") && !$.checkUserAgent("Trident"))
                                            TweenMax.to($_atgs, 6.5, {
                                                delay: 0,
                                                scale: 1.06,
                                                ease: Power0.easeNone
                                            });
                                        TweenMax.to($atgs.eq(0), 1, {
                                            delay: 0,
                                            width: "17%",
                                            "margin-left": 0,
                                            ease: Power2.easeOut
                                        });
                                        TweenMax.to($atgs.eq(1), 1, {
                                            delay: 0.1,
                                            width: "17%",
                                            "margin-left": 0,
                                            ease: Power2.easeOut
                                        });
                                        TweenMax.to($atgs.eq(2), 1, {
                                            delay: 0.2,
                                            width: "17%",
                                            "margin-left": 0,
                                            ease: Power2.easeOut
                                        });
                                        TweenMax.to($atgs.eq(3), 1, {
                                            delay: 0.3,
                                            width: "17%",
                                            "margin-left": 0,
                                            ease: Power2.easeOut
                                        });
                                        TweenMax.to($atgs.eq(4), 1, {
                                            delay: 0.4,
                                            width: "17%",
                                            "margin-left": 0,
                                            ease: Power2.easeOut
                                        });
                                        TweenMax.to($atgs.eq(5), 1, {
                                            delay: 0.5,
                                            width: "17%",
                                            "margin-left": 0,
                                            ease: Power2.easeOut
                                        });
                                        TweenMax.to($_atgs, 0, {
                                            delay: 5,
                                            onComplete: next
                                        });
                                    },
                                    init = function() {
                                        next();
                                    }();
                            },
                            init = function() {
                                startTopAnime();
                            }();
                    },
                    init = function() {
                        $pgs.each(initPg);
                        setRatio();
                        $win.on("resize", setRatio);
                        setAnimetion();
                    }();
            },
            init = function() {
                $tgs.each(pgSetting);
            }();
    }());