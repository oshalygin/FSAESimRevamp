import React, { PropTypes } from "react";
import { connect } from "react-redux";

class Application extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <h3>Application Component</h3>
                {this.props.children}
            </div>
        );
    }
}

Application.propTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        loading: 0
    };
}


export default connect(mapStateToProps)(Application);