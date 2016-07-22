import React from "react";
import { Route, IndexRoute } from "react-router";
import Application from "./components/application.jsx";
import HomePage from "./components/home/homePage.jsx";

export default (
    <Route path="/" component={Application}>
        <IndexRoute component={HomePage} />
        <Route path="home" component={HomePage} />
    </Route>
);