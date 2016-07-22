import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import configureStore from "./store/configureStore.dev";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import Application from "./components/application.jsx";
import HomePage from "./components/home/homePage.jsx";
import { Provider } from "react-redux";
import { routes } from "./routes";
import "./styles/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap-theme.min.css";
import "../node_modules/toastr/build/toastr.min.css";

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