import React, { PropTypes } from "react";
import { connect } from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from "../styles/muiTheme.js";

const muiTheme = getMuiTheme(theme);

class Application extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div className="container-fluid">
                    <h3>Application Component</h3>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}

Application.propTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool
};

function mapStateToProps(state, ownProps) {
    return {
        loading: false
    };
}


export default connect(mapStateToProps)(Application);