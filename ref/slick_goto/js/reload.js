document.ready(function () {
	$(window).bind("resize load", function () {
		$(".idx_loading .lettering_01").textillate({
			in: { effect: "fadeIn", delay: 100 },
		});
	});

	$(window).on("scroll load", function () {
		$(".idx_loading").each(function () {
			var $this = $(this);
			if (
				$(window).scrollTop() + $(window).height() >
				$this.offset().top
			) {
				if (!$this.hasClass("show")) {
					setTimeout(function () {
						$this.addClass("show");
					}, 1000);
				}
			}
		});
		setTimeout(function () {
			$(".idx_loading").addClass("hide");
			setTimeout(function () {
				$(".idx_mv").addClass("show");
			}, 800);
		}, 3000);
	});
});
// https://stackoverflow.com/questions/48054601/how-to-show-website-preloader-only-once
