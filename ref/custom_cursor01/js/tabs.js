$(document).ready(function () {
    $(".tabs .item > li").click(function (e) {
        if (!$(this).hasClass("active")) {
            var tabNum = $(this).index();
            var nthChild = tabNum + 1;
            $(".tabs .item li.active").removeClass("active");
            $(this).addClass("active");
            $(".grp_con .items.active").removeClass("active");
            $(".grp_con .items:nth-child(" + nthChild + ")").addClass("active");
        }
    });

});