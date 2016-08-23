import React from "react";
import { connect } from "react-redux";
// import jQuery from "jquery";

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
                <NavigationBar pathName ="analysis" offset={true} />
                <Summary />
            </div>
        );
    }
}

export default connect()(AnalysisPage);