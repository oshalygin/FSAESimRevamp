import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

export class AnalysisPage extends React.Component {
    render() {
        return (
            <div>
            <p>Analysis</p>
            </div>
        );
    }
}

export default connect()(AnalysisPage);