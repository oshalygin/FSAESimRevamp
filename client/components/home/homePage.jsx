import React from "react";

import HomeNavigationBar from "../common/homeNavigationBar.jsx";
import PreLoader from "../common/preLoader.jsx";
import Intro from "./intro.jsx";
import SourceProfile from "./sourceProfile.jsx";
import Progress from "./progress.jsx";
import Features from "./features.jsx";
import Contact from "./contact.jsx";
import "../../styles/homePageTheme.js";

class HomePage extends React.Component {
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