import React from "react";

import Intro from "./intro.jsx";
import Profile from "./profile.jsx";
import SocialProfile from "./socialProfile.jsx";
import Stats from "./stats.jsx";
import Features from "./features.jsx";
import Callout from "./callout.jsx";
import Resume from "./resume.jsx";
import Contact from "./contact.jsx";

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Intro />
                <Profile />
                <SocialProfile />
                <Stats />
                <Features />
                <Callout />
                <Resume />
                <Contact />
            </div>
        );
    }
}

export default HomePage;