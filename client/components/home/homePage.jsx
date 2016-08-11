import React from "react";

import Intro from "./intro.jsx";
import SourceProfile from "./sourceProfile.jsx";
import Progress from "./progress.jsx";
import Features from "./features.jsx";
import Contact from "./contact.jsx";

class HomePage extends React.Component {
    render() {
        return (
            <div>
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