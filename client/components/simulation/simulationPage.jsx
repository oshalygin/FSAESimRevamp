import React from "react";
import { connect } from "react-redux";

import PreLoader from "../common/preLoader.jsx";
import NavigationBar from "../common/navigationBar.jsx";

export class SimulationPage extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <PreLoader />
                <NavigationBar pathName ="simulation" />

            </div>
        );
    }
}

export default connect()(SimulationPage);