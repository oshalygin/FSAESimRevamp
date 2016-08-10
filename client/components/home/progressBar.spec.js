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
        const expected = 8;

        const {active} = currentProgress(progress, total);
        const actual = active.length;
        expect(actual).toEqual(expected);

    });

    it("The progress bar properly sets 2 skill rate off tags", () => {

        const progress = 8;
        const total = 10;
        const expected = 2;
        const {inactive} = currentProgress(progress, total);

        const actual = inactive.length;
        expect(actual).toEqual(expected);

    });

    it("The progress bar properly sets 0 skill rate off tags when the progress is the same", () => {

        const progress = 2;
        const total = 2;
        const expected = 0;
        const {inactive} = currentProgress(progress, total);

        const actual = inactive.length;
        expect(actual).toEqual(expected);

    });

    it("The progress bar properly sets 2 skill rate on tags when the progress is the same", () => {

        const progress = 2;
        const total = 2;
        const expected = 2;

        const {active} = currentProgress(progress, total);
        const actual = active.length;

        expect(actual).toEqual(expected);

    });

    it("The second element of the renderred progress bar is a div with a class of skill-bar", () => {

        const props = {
            title: "Stuff",
            progress: 8,
            total: 10
        };

        const expected = "skill-bar";

        const renderredOutput = shallow(<ProgressBar {...props} />);
        const actual = renderredOutput.children().get(1).props.className;
        expect(actual).toEqual(expected);

    });


});