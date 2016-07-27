import React, { PropTypes } from "react";
import { connect } from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from "../styles/muiTheme.js";

import PreLoader from "./common/preLoader.jsx";
import NavigationBar from "./common/navigationBar.jsx";
import HomePage from "./home/homePage.jsx";

const muiTheme = getMuiTheme(theme);

class Application extends React.Component {
    render() {
        return (
            <div>
                <PreLoader />
                <NavigationBar />
                <HomePage />
                <MuiThemeProvider muiTheme={muiTheme}>
                    <div className="container-fluid">
                        <h3>Application Component</h3>
                        {this.props.children}
                    </div>
                </MuiThemeProvider>
            </div>
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