function setBrowser() {
    var ua = {
        Safari: typeof window.chrome == 'undefined' && 'WebkitAppearance' in document.documentElement.style,
        Firefox: 'MozAppearance' in document.documentElement.style,
        IE: window.navigator.userAgent.toLowerCase().indexOf('msie') !== -1 || window.navigator.userAgent.toLowerCase().indexOf('trident') !== -1,
        IE9: window.navigator.appVersion.toLowerCase().indexOf('msie 9.') !== -1,
        ltIE9: typeof window.addEventListener === 'undefined' && typeof document.getElementsByClassName === 'undefined',
        Touch: typeof document.ontouchstart !== 'undefined',
        Pointer: window.navigator.pointerEnabled,
        MSPoniter: window.navigator.msPointerEnabled,
        Windows: window.navigator.userAgent.toLowerCase().indexOf('win') !== -1,
        Mac: window.navigator.userAgent.toLowerCase().indexOf('mac') !== -1,
        Mobile: window.navigator.userAgent.toLowerCase().indexOf('iphone') > 0 || window.navigator.userAgent.toLowerCase().indexOf('ipod') > 0 || window.navigator.userAgent.toLowerCase().indexOf('android') > 0 && window.navigator.userAgent.toLowerCase().indexOf('mobile') > 0,
        Tablet: window.navigator.userAgent.toLowerCase().indexOf('ipad') > 0 || window.navigator.userAgent.toLowerCase().indexOf('android') > 0 && window.navigator.userAgent.toLowerCase().indexOf('mobile') == -1,
        android: window.navigator.userAgent.indexOf('Android') !== -1
    };
    if (ua.Safari) {
        $('html').addClass('safari');
    }
    if (ua.Firefox) {
        $('html').addClass('firefox');
    }
    if (ua.IE) {
        $('html').addClass('ie');
    }
    if (ua.IE9) {
        $('html').addClass('ie9');
    }
    if (ua.ltIE9) {
        $('html').addClass('ie8');
    }
    if (ua.android) {
        $('html').addClass('android');
    }

    /* Defining touch events */
    if (ua.Tablet) {
        $('html').addClass('tablet');
        touchDeviceDirectionJudge();
        $(window).on('orientationchange', function () {
            touchDeviceDirectionJudge();
        });
    }
}
setBrowser();

var totop_click = false;


// parallaxInit
var $parallaxSection = $('.js-parallaxSection'),
    $parallaxContant = $('#js-parallaxContent'),
    $categoryTitle = $('.js-categoryTitle'),
    $categoryDetail = $('.js-categoryDetail'),
    $categoryBanner = $('.js-categoryBanner'),
    mousewheelevent = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
var scrollTopValue, frame, mouseDirection, parallaxSectionHeight, animationRange, parallaxSectionFirstTop, parallaxChangePointsFirst, parallaxChangePointsSecond, parallaxChangePointsThird, progressValue;

// スクロールイベント
function scrollAnimationInit() {
    setParallaxPosition();
    addParallaxPosition();
    scrollUpdate();

    $(window).on('resize', function () {
        setParallaxPosition();
        addParallaxPosition();
        scrollUpdate();
    });

    $(window).on("scroll", function () {
        cancelAnimationFrame(frame);
        scrollUpdate();
        frame = requestAnimationFrame(scrollUpdate);
    });

    var wheelVal = 0;
    $(document).on(mousewheelevent, function (e) {
        var deltaY = e.originalEvent.deltaY ? e.originalEvent.deltaY : e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : e.originalEvent.detail;
        wheelVal = deltaY;
        if ($('html').hasClass('ie')) {
            wheelVal *= -1;
        }
        mouseDirection = wheelVal > 0 ? 'down' : 'up';
    });
}

// パララックス
// ポジション取得
function setParallaxPosition() {
    parallaxSectionHeight = $parallaxSection.height();
    animationRange = parallaxSectionHeight * 3;
    parallaxSectionFirstTop = [];
    // 初期とfixed解除後のtop位置
    $parallaxSection.each(function (i) {
        parallaxSectionFirstTop.push(animationRange * i);
    });
    // fixedを切り替えるポイント
    parallaxChangePointsFirst = parallaxSectionFirstTop.map(function (val) {
        return val + $parallaxContant.offset().top;
    });
    parallaxChangePointsSecond = parallaxChangePointsFirst.map(function (val) {
        return val + animationRange;
    });
    parallaxChangePointsThird = parallaxChangePointsSecond.map(function (val) {
        return val - parallaxSectionHeight;
    });
}

// ポジション付与
function addParallaxPosition() {
    $parallaxContant.css('height', animationRange * $parallaxSection.length);
    $parallaxSection.each(function (i) {
        $(this).css({
            'top': parallaxSectionFirstTop[i]
        });
    });
}

//
// スクロール中のイベント
//
function scrollUpdate(e) {
    scrollTopValue = $(window).scrollTop();
    parallaxAnimationControl();
}

function parallaxAnimationControl() {
    if (totop_click === false) {
        parallaxChangePointsFirst.forEach(function (val, i) {
            if (scrollTopValue >= val && scrollTopValue < parallaxChangePointsThird[i]) {
                // fixedクラス付与
                $parallaxSection.eq(i).addClass('is-fixed');
                $parallaxSection.eq(i).css('top', 0);
                addFiexedMoveLeft(i); // fixed時の横スクロール付与
                progressBarControl(i); // プログレスバー制御

                parallaxElementAnimation($('.js-progressBar'), i, 1); //プログレスバーアニメーション
                parallaxElementAnimation($parallaxSection, i, 20); //背景アニメーション
                parallaxElementAnimation($categoryTitle, i, 40); //タイトルアニメーション
                parallaxElementAnimation($categoryDetail, i, 60); //ディテールアニメーション

                if ($parallaxSection.eq(i).find('.categoryContent_banner').length > 0) {
                    parallaxElementAnimation_three($('.js-progressBar'), i, 1, 100); //プログレスバーアニメーション
                    parallaxElementAnimation_three($parallaxSection, i, 20, 100); //背景アニメーション
                    parallaxElementAnimation_three($categoryTitle, i, 35, 75); //タイトルアニメーション
                    parallaxElementAnimation_three($categoryDetail, i, 55, 75); //ディテールアニメーション
                    parallaxElementAnimation_three($categoryBanner, 0, 80, 100); //ディテールアニメーション
                }


            } else if (scrollTopValue >= parallaxChangePointsThird[i] && scrollTopValue < parallaxChangePointsSecond[i]) {
                removeFiexedMoveLeft(i);
                // fixedクラス削除
                if (mouseDirection == 'down') {
                    removeParallaxAnimation(i, parallaxSectionFirstTop[i] + parallaxSectionHeight * 2);
                } else {
                    removeParallaxAnimation(i + 1, parallaxSectionFirstTop[i + 1]);
                }
            }
            // インデックス0の時のremove
            if (i == 0 && scrollTopValue < parallaxChangePointsFirst[i] && mouseDirection == 'up') {
                removeParallaxAnimation(i, parallaxSectionFirstTop[i]);
            }
        });
    }
}

// パララックス解除
function removeParallaxAnimation(index, val) {
    $parallaxSection.eq(index).removeClass('is-fixed');
    $parallaxSection.eq(index).css('top', val);
}

// プログレスバー制御
function progressBarControl(index) {
    var eachElementValue = scrollTopValue - parallaxChangePointsFirst[index];
    progressValue = eachElementValue / (parallaxSectionHeight * 2 / 100);
    $('.js-progressBarMeter').eq(index).css('transform', 'translateY(' + progressValue + '%)');
}

// 各パララックスセクション内の各要素のアニメーション制御（プログレスバーの値に基づいて発火タイミングを測る）
function parallaxElementAnimation(target, index, distance) {
    if (progressValue > distance) {
        target.eq(index).addClass('is-active');
    } else {
        target.eq(index).removeClass('is-active');
    }
}

function parallaxElementAnimation_three(target, index, distance, end) {
    if (progressValue > distance && progressValue < end) {
        target.eq(index).addClass('is-active');
    } else {
        target.eq(index).removeClass('is-active');
    }
}

// fixed時の横スクロール付与
function addFiexedMoveLeft(index) {
    $parallaxSection.eq(index).css({
        left: -window.scrollX
    });
}
// fixed時の横スクロール解除
function removeFiexedMoveLeft(index) {
    $parallaxSection.each(function () {
        if ($(this).css('left') !== '0px') {
            $(this).css('left', 0);
        }
    });
}
//resize
$(window).bind("resize load", function () {
    setTimeout(function () {
        scrollAnimationInit();
    }, 500);
    //sp
    var ww = $(window).width();
    if (ww <= 768) {       

    }
});

$(window).load(function () {
    "use strict";
    $('html,body').animate({
        scrollTop: 0
    }, 10);

    setTimeout(function () {
        scrollAnimationInit();
    }, 500);

    function toTopEvent() {
        $('.parallaxContent .js-section').each(function (i) {
            $(this).removeClass('is-active');
            $(this).removeClass('is-fixed');
            $(this).css('top', parallaxSectionFirstTop[i]);
            $(this).find('.js-categoryTitle').removeClass('is-active');
            $(this).find('.js-categoryDetail').removeClass('is-active');
            $(this).find('.js-categoryBanner').removeClass('is-active');
        });
    }

    $('#totop a').click(function (e) {
        totop_click = true;
        toTopEvent();
        $('body,html').animate({
            scrollTop: 0
        }, 400, function () {
            totop_click = false;
        });
    });
});
