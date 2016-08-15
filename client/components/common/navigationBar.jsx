import React, { PropTypes } from "react";
import { Link } from "react-router";

export function setPath(pathName) {
    return {
        home: pathName.toLowerCase() === "home" ? "active" : null,
        analysis: pathName.toLowerCase() === "analysis" ? "active" : null,
        simulation: pathName.toLowerCase() === "simulation" ? "active" : null
    };
}

const NavigationBar = ({pathName}) => {
    const path = setPath(pathName);
    return (
        <nav className="navbar navbar-custom navbar-fixed-top navbar-color" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <a className="navbar-brand" href="#">FSAESim</a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li className={path.home}><Link to="home">Home</Link></li>
                        <li className={path.analysis}><Link to="analysis">Analysis</Link></li>
                        <li className={path.simulation}><Link to="simulation">Simulation</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

NavigationBar.propTypes = {
    pathName: PropTypes.string.isRequired
};

export default NavigationBar;
