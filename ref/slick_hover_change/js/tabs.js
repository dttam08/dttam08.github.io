$(document).ready(function(){
    $(".tabs li").click(function(e){
        if (!$(this).hasClass("active")) {
            var tabNum = $(this).index();
            var nthChild = tabNum+1;
            $(".tabs li.active").removeClass("active");
            $(this).addClass("active");
            $(".show_tab .item.active").removeClass("active");
            $(".show_tab .item:nth-child("+nthChild+")").addClass("active");
        }
    })
	
	
});