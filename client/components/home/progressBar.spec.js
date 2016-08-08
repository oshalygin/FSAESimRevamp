/* eslint-disable no-unused-vars */
import expect from "expect";
import { mount, shallow } from "enzyme";
import TestUtils from "react-addons-test-utils";
import React, { PropTypes } from "react";
import ProgressBar, { currentProgress } from "./progressBar.jsx";

describe("<ProgressBar />", () => {

    it("The highlight function will properly expand the ingredients", () => {

        // const ingredients = ["Apples", "Oranges", "Rice"];
        const progress = 8;
        const total = 10;

        const expected = "<span><span><span> <span>App<code>le</code>s</span> | </span> Oranges | </span> Rice | </span>";
        const {active} = currentProgress(progress, total);

        const renderredOutput = shallow(active);
        const actual = renderredOutput.html();

        expect(actual).toEqual(expected);

    });



});