//js処理用メディアクエリ
var mediaFlg;
mediaQry();
$(window).on("resize", function() {
    mediaQry();
});
// メディアクエリ
function mediaQry() {
    var width = $(window).width();
    if (width > 1024) {
        mediaFlg = "pc";
    } else if (width > 600) {
        mediaFlg = "tablet";
    } else if (width <= 600) {
        mediaFlg = "sp";
    }
}
// スライダーの諸々定義
let active = "is_active";
let inactive = "is_inactive";
let slideSpeed = 5000;
let slideCount = 0;
// スライダーのスピードに合わせてcss側にカスタムプロパティを渡す
document.documentElement.style.setProperty(
    "--ts-duration1",
    slideSpeed / 1000 / 2 + "s"
);
document.documentElement.style.setProperty(
    "--ts-duration4",
    slideSpeed / 1000 + "s"
);
document.documentElement.style.setProperty(
    "--ts-delay1",
    Math.round(slideSpeed / 100 / 6.2) / 10 + "s"
);

function kvSlider() {
    // メディアクエリによってトリガーにする要素を決める
    let slider = "";
    if (mediaFlg == "pc") {
        slider = $(".main_img_list.pc_area");
    } else {
        slider = $(".main_img_list.sp_area");
    }
    let sliderLength = slider.find("li").length - 1;
    let activeElm = slider.find("." + active);
    let currentElm = slider.children("li").eq(slideCount);
    let nextElm = slider.children("li").eq(slideCount + 1);
    slider
        .closest(".kv_slider")
        .find(".total_count")
        .text(sliderLength + 1);
    if (slideCount == sliderLength) {
        // スライドが最後までいった時
        slideCount = -1;
        nextElm = slider.children("li").eq(0);
    }
    if (activeElm.length == 0) {
        // 初回起動時
        currentElm.addClass(active);
    } else {
        // カウントアップしてclassを付け外し
        currentElm.removeClass(active).addClass(inactive);
        nextElm.addClass(active);
        setTimeout(function() {
            currentElm.removeClass(inactive);
        }, slideSpeed / 3);

        slideCount++;
        // ナビゲーションにカレント番号をセット
        slider
            .closest(".kv_slider")
            .find(".current_count")
            .text(slideCount + 1);
    }
    setTimeout(kvSlider, slideSpeed);
}

$(function() {
    // まずは画像を読み込み
    let img = "";
    if (mediaFlg == "pc") {
        img = $(".main_img_list.pc_area img");
    } else {
        img = $(".main_img_list.sp_area img");
    }
    let imgLength = img.length;
    var imgCount = 0;
    img.each(function() {
        let imgSrc = $(this).attr("src");
        $(this).attr("src", "");
        $(this).on("load", function() {
            imgCount++;
            if (imgCount == imgLength) {
                //画像読み込みが終わったらスライダー起動
                $(".kv_slider").addClass("kv_slide_init");
                $(".kv_slider").find(".main_circle").addClass("is_init");
                kvSlider();
            }
        });
        $(this).attr("src", imgSrc);
    });
});



$(function() {
    $('.index_property_list').slick({
        centerMode: true,
        autoplay: true,
        centerPadding: '21%',
        slidesToShow: 2,
        responsive: [{
                breakpoint: 640,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});


