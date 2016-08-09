/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import expect from "expect";
import { mount, shallow } from "enzyme";
import TestUtils from "react-addons-test-utils";
import React, { PropTypes } from "react";
import ProgressBar, { currentProgress } from "./progressBar.jsx";

describe("<ProgressBar />", () => {

    it("The progress bar properly sets 8 skill rate on tags", () => {

        const progress = 8;
        const total = 10;

        const expected = "<span><div class=\"skill-rate-on\"></div><div class=\"skill-rate-on\"></div><div class=\"skill-rate-on\"></div><div class=\"skill-rate-on\"></div><div class=\"skill-rate-on\"></div><div class=\"skill-rate-on\"></div><div class=\"skill-rate-on\"></div><div class=\"skill-rate-on\"></div></span>";

        const {active} = currentProgress(progress, total);

        const renderredOutput = shallow(active);
        const actual = renderredOutput.html();

        expect(actual).toEqual(expected);

    });

    it("The progress bar properly sets 2 skill rate off tags", () => {

        const progress = 8;
        const total = 10;

        const expected = "<span><div class=\"skill-rate-off\"></div><div class=\"skill-rate-off\"></div></span>";

        const {inactive} = currentProgress(progress, total);

        const renderredOutput = shallow(inactive);
        const actual = renderredOutput.html();

        expect(actual).toEqual(expected);

    });

    it("The progress bar properly sets 0 skill rate off tags when the progress is the same", () => {

        const progress = 2;
        const total = 2;

        const expected = "<span></span>";

        const {inactive} = currentProgress(progress, total);

        const renderredOutput = shallow(inactive);
        const actual = renderredOutput.html();

        expect(actual).toEqual(expected);

    });

    it("The progress bar properly sets 2 skill rate on tags when the progress is the same", () => {

        const progress = 2;
        const total = 2;

        const expected = "<span><div class=\"skill-rate-on\"></div><div class=\"skill-rate-on\"></div></span>";

        const {active} = currentProgress(progress, total);

        const renderredOutput = shallow(active);
        const actual = renderredOutput.html();

        expect(actual).toEqual(expected);

    });



});