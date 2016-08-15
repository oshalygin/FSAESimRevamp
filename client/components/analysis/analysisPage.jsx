import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import PreLoader from "../common/preLoader.jsx";

export class AnalysisPage extends React.Component {
    render() {
        return (
            <div>
            <PreLoader />
            <p>Analysis</p>
            </div>
        );
    }
}

export default connect()(AnalysisPage);