import React from "react";
import { Link } from "react-router";


const NavigationBar = () => {
    return (
        <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">FSAESim</a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#intro">Home</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><Link to="analysis">Analysis</Link></li>
                        <li><a href="#progress">Progress</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;



