import React from "react";

import Intro from "./intro.jsx";
import Profile from "./profile.jsx";
import Progress from "./progress.jsx";
import Features from "./features.jsx";
import Contact from "./contact.jsx";

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Intro />
                <Profile />
                <Features />
                <Progress />
                <Contact />
            </div>
        );
    }
}

export default HomePage;