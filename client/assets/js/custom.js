let wowjs = require("../../../node_modules/wowjs/dist/wow").WOW;

(function ($, WOW) {

	$(window).load(function () {
		$("#status").fadeOut();
		$("#preloader").delay(1000).fadeOut("slow");
	});

	$(document).ready(function () {
		$("body").scrollspy({
			target: ".navbar-custom",
			offset: 50
		});

		$(document).on("click", ".navbar-collapse.in", function (e) {
			if ($(e.target).is("a") && $(e.target).attr("class") !== "dropdown-toggle") {
				$(this).collapse("hide");
			}
		});

		$("a[href*=\\#]").bind("click", function (e) {
			const anchor = $(this);
			$("html, body").stop().animate({
				scrollTop: $(anchor.attr("href")).offset().top
			}, 1000);
			e.preventDefault();
		});

		$("#intro").backstretch("./client/images/main2.jpg");

		const navbar = $(".navbar");
		const navHeight = navbar.height();

		$(window).scroll(function () {
			if ($(this).scrollTop() >= navHeight) {
				navbar.addClass("navbar-color");
			} else {
				navbar.removeClass("navbar-color");
			}
		});

		if ($(window).width() <= 767) {
			navbar.addClass("custom-collapse");
		}

		$(window).resize(function () {
			if ($(this).width() <= 767) {
				navbar.addClass("custom-collapse");
			} else {
				navbar.removeClass("custom-collapse");
			}
		});

		const wow = new WOW({
			mobile: false,
			live: false
		});
		wow.init();

		$(".rotate").textrotator({
			animation: "dissolve",
			separator: "|",
			speed: 3000
		});
	});

}(jQuery, wowjs)); //eslint-disable-line no-undef
