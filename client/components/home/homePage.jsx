import React from "react";
import jQuery from "jquery";

import HomeNavigationBar from "../common/homeNavigationBar.jsx";
import PreLoader from "../common/preLoader.jsx";
import Intro from "./intro.jsx";
import SourceProfile from "./sourceProfile.jsx";
import Progress from "./progress.jsx";
import Features from "./features.jsx";
import Contact from "./contact.jsx";
import "../../styles/homePageTheme.js";

class HomePage extends React.Component {
    componentDidMount() {
        jQuery("#status").fadeOut();
		jQuery("#preloader").delay(1000).fadeOut("slow");
        jQuery("body").scrollspy({
			target: ".navbar-custom",
			offset: 50
		});
        jQuery("#intro").backstretch("./client/images/main2.jpg");

        const navbar = jQuery(".navbar");
		const navHeight = navbar.height();

		jQuery(window).scroll(function () {
			if (jQuery(this).scrollTop() >= navHeight) {
				navbar.addClass("navbar-color");
			} else {
				navbar.removeClass("navbar-color");
			}
		});
    }

    render() {
        return (
            <div>
            <PreLoader />
            <HomeNavigationBar />
                <Intro />
                <SourceProfile />
                <Features />
                <Progress />
                <Contact />
            </div>
        );
    }
}

export default HomePage;