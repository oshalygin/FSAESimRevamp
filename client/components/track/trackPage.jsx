import React from "react";
import { connect } from "react-redux";

import trackMapImage from "../../images/trackMap.jpg";

import PreLoader from "../common/preLoader.jsx";
import NavigationBar from "../common/navigationBar.jsx";

import TrackMap from "./trackMap.jsx";



class TrackPage extends React.Component {
    render() {
        return (
            <div>
                <PreLoader />
                <NavigationBar pathName="track" offset={true} />
                <div className="container">
                    <br/>
                    <br/>
                    <br/>
                    <TrackMap />
                </div>
            </div>
        );
    }
}

export default connect()(TrackPage);