import React from "react";

import Intro from "./intro.jsx";
import Profile from "./profile.jsx";
import SocialProfile from "./socialProfile.jsx";
import Stats from "./stats.jsx";
import Services from "./services.jsx";
import Callout from "./callout.jsx";

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Intro />
                <Profile />
                <SocialProfile />
                <Stats />
                <Services />
                <Callout />
            </div>
        );
    }
}

export default HomePage;