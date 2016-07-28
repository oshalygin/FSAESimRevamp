var wowjs = require("../../../node_modules/wowjs/dist/wow").WOW;
(function ($, WOW) {

	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	$(window).load(function () {
		$('#status').fadeOut();
		$('#preloader').delay(1000).fadeOut('slow');
	});

	$(document).ready(function () {

		$('body').scrollspy({
			target: '.navbar-custom',
			offset: 50
		})

		$(document).on('click', '.navbar-collapse.in', function (e) {
			if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
				$(this).collapse('hide');
			}
		});

		$('a[href*=\\#]').bind("click", function (e) {
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});

		/* ---------------------------------------------- /*
		 * Background image
		/* ---------------------------------------------- */

		$('#intro').backstretch('./client/assets/images/main2.jpg');

		/* ---------------------------------------------- /*
		 * Navbar
		/* ---------------------------------------------- */

		var navbar = $('.navbar');
		var navHeight = navbar.height();

		$(window).scroll(function () {
			if ($(this).scrollTop() >= navHeight) {
				navbar.addClass('navbar-color');
			}
			else {
				navbar.removeClass('navbar-color');
			}
		});

		if ($(window).width() <= 767) {
			navbar.addClass('custom-collapse');
		}

		$(window).resize(function () {
			if ($(this).width() <= 767) {
				navbar.addClass('custom-collapse');
			}
			else {
				navbar.removeClass('custom-collapse');
			}
		});

		var wow = new WOW({
			mobile: false
		});
		wow.init();

		/* ---------------------------------------------- /*
		 * Rotate
		/* ---------------------------------------------- */

		$(".rotate").textrotator({
			animation: "dissolve",
			separator: "|",
			speed: 3000
		});

		/* ---------------------------------------------- /*
		 * Contact form ajax
		/* ---------------------------------------------- */



	});

})(jQuery, wowjs);
