import React from "react";
import { connect } from "react-redux";

import PreLoader from "../common/preLoader.jsx";
import NavigationBar from "../common/navigationBar.jsx";
import Summary from "./summary.jsx";

export class AnalysisPage extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <PreLoader />
                <NavigationBar pathName ="analysis" />
                <Summary />
            </div>
        );
    }
}

export default connect()(AnalysisPage);