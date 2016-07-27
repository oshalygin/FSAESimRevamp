import React from "react";
import { Link, IndexLink } from "react-router";


const NavigationBar = () => {
    return (
        <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="index.html#">FSAESim</a>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
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

