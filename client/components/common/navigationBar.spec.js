/* eslint-disable no-unused-vars */
import expect from "expect";
import { mount, shallow } from "enzyme";
import TestUtils from "react-addons-test-utils";
import React from "react";
import NavigationBar from "./navigationBar.jsx";

describe("<NavigationBar />", () => {

    it("The className of active exists on the second element which is Analysis", () => {
        const props = {
            pathName: "analysis"
        };
        const expected = props.message;
        const wrapper = shallow(<NavigationBar {...props} />);
        const actual = wrapper.find("li").at(1).hasClass("active");

        expect(actual).toBeTruthy();

    });

    it("There is no active class on the second element of analysis when the path is 'simulation'", () => {
        const props = {
            pathName: "simulation"
        };
        const expected = props.message;
        const wrapper = shallow(<NavigationBar {...props} />);
        const actual = wrapper.find("li").at(1).hasClass("active");

        expect(actual).toBeFalsy();

    });

});