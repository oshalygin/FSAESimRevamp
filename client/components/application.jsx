import React, { PropTypes } from "react";
import { connect } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import theme from "../styles/muiTheme.js";

import Footer from "./common/footer.jsx";

const muiTheme = getMuiTheme(theme);

class Application extends React.Component {
    render() {
        return (
            <div>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <div>
                        <div className="wrapper">
                            {this.props.children}
                            <Footer />
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

Application.propTypes = {
    children: PropTypes.object.isRequired
};

export default connect()(Application);