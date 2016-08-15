import React from "react";
import jQuery from "jquery";

class PreLoader extends React.Component {
    componentDidMount() {
        jQuery("#status").fadeOut();
		jQuery("#preloader").delay(1000).fadeOut("slow");
    }
    render() {
        return (<div id="preloader">
            <div id="status">
                <div className="status-mes">
                    <h4>FSAESim</h4>
                </div>
            </div>
        </div>);
    }
}

export default PreLoader;