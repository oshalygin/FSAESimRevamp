import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import configureStore from "./store/configureStore";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux";

import "../node_modules/material-design-lite/material.min.css";
import "../node_modules/jquery/dist/jquery.min";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap-theme.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/toastr/build/toastr.min.css";
import "../node_modules/material-design-lite/material.min.js";
import "../node_modules/jquery.backstretch/jquery.backstretch.min";
import "../node_modules/jquery.simple-text-rotator/jquery.simple-text-rotator.min";
import "../node_modules/wowjs/dist/wow";
import "../node_modules/smoothscroll/smoothscroll.min";


import "./styles/material.icons.css";
import "./styles/material.style.css";

import "./images/favicon.ico";
import "./images/apple-touch-icon.png";
import "./images/favicon-16x16.png";
import "./images/favicon-32x32.png";
import "./images/mstile-150x150.png";
import "./images/safari-pinned-tab.svg";

import "./styles/simpletextrotator.css";
import "./styles/animate.css";
import "./styles/style.css";

import "./assets/assets";
import Application from "./components/application.jsx";
import HomePage from "./components/home/homePage.jsx";

const store = configureStore();
render(
    <Provider store={store}>
        <Router history={browserHistory}>

            <Route path="/" component={Application}>
                <IndexRoute component={HomePage} />
                <Route path="home" component={HomePage} />
            </Route>

        </Router>
    </Provider>,
    document.getElementById("application")
);