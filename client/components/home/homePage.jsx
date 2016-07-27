import React from "react";

import Intro from "./intro.jsx";
import Profile from "./profile.jsx";

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Intro />
                <Profile />
            </div>
        );
    }
}

export default HomePage;