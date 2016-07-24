var wowjs = require("../../../node_modules/wowjs/dist/wow").WOW;
(function ($, WOW) {

	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	$(window).load(function () {
		$('#status').fadeOut();
		$('#preloader').delay(350).fadeOut('slow');
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

		$('a[href*=#]').bind("click", function (e) {
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});

		/* ---------------------------------------------- /*
		 * Background image
		/* ---------------------------------------------- */

		$('#intro').backstretch(['../images/bg4.jpg']);

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

		// /* ---------------------------------------------- /*
		//  * Count to
		// /* ---------------------------------------------- */

		// $('#stats').waypoint(function() {
		// 	$('.timer').each(function() {
		// 		counter = $(this).attr('data-count'),
		// 		$(this).delay(6000).countTo({
		// 			from: 0,
		// 			to: counter,
		// 			speed: 3000,// Stats Counter Speed
		// 			refreshInterval: 50,
		// 		});
		// 	});
		//  }, { offset: '70%', triggerOnce: true });

		/* ---------------------------------------------- /*
		 * WOW Animation When You Scroll
		/* ---------------------------------------------- */
		// var WOW = require("../../../node_modules/wowjs/dist/wow.js");
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
