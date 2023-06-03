// JavaScript Document
$(function () {
	"use strict";
	var ojbect = {
		init: function () {
			this.topInit();
			this.ajaxBlog();
		},
		topInit: function () {
			new WOW().init();

			if ($(".box03-slide")) {
				$(".box03-slide").slick({
					dots: true,
					infinite: true,
					speed: 300,
					slidesToShow: 1,
					variableWidth: true,
				});
			}
			$(".box03-thumb li").click(function (e) {
				e.preventDefault();
				const index = $(this).index();
				$(".box03-slide").slick("slickGoTo", index);
			});
		},
		ajaxBlog: function () {
			$.ajax({
				url: "blog/_custom/?limit=1&cat=1",
				dataType: "jsonp",
				success: function (json) {
					$.each(json.data, function (i, val) {
						var ttl = val.title;
						ttl = ttl.length < 20 ? ttl : ttl.substr(0, 10) + "...";
						var date_new = new Date(val.date)
							.toISOString()
							.slice(0, 10);
						date_new = date_new.replace("-", "/").replace("-", "/");
						var img = "";
						if (val.img1 != "") {
							img = $(val.img1).attr("src");
						} else {
							img = "images/under-img1.jpg";
						}
						var html =
							'<li><a href="blog/' +
							val.url +
							'"><div class="img"><img src="' +
							img +
							'" alt="' +
							ttl +
							'"></div><div class="content"><p class="date">' +
							date_new +
							'</p><p class="title">' +
							ttl +
							"</p></div></a></li>";
						$(".inBlog-list").append(html);
					});
				},
			});
			$.ajax({
				url: "blog/_custom/?limit=3&cat=2",
				dataType: "jsonp",
				success: function (json) {
					$.each(json.data, function (i, val) {
						var ttl = val.title;
						ttl = ttl.length < 20 ? ttl : ttl.substr(0, 20) + "...";
						var date_new = new Date(val.date)
							.toISOString()
							.slice(0, 10);
						date_new = date_new.replace("-", "/").replace("-", "/");
						var html =
							'<li><a href="blog/' +
							val.url +
							'"><span class="date">' +
							date_new +
							'</span><span class="title">' +
							ttl +
							"</span></div></a></li>";
						$(".box04-case-list").append(html);
					});
				},
			});
		},
	};
	ojbect.init();
});
