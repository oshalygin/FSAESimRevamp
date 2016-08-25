import React, { PropTypes } from "react";
import { connect } from "react-redux";

import Footer from "./common/footer.jsx";


class Application extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div className="wrapper">
                        {this.props.children}
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

Application.propTypes = {
    children: PropTypes.object.isRequired
};

export default connect()(Application);