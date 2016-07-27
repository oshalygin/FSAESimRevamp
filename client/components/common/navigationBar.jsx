import React from "react";
import { Link, IndexLink } from "react-router";


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
                    </button>
                    <a className="navbar-brand" href="index.html#">FSAESim</a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="index.html#intro">home</a></li>
                        <li><a href="index.html#profile">Profile</a></li>
                        <li><a href="index.html#services">Services</a></li>
                        <li><a href="index.html#resume">Resume</a></li>
                        <li><a href="index.html#portfolio">Portfolio</a></li>
                        <li><a href="index.html#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;

