/* eslint-disable no-unused-vars */
import expect from "expect";
import { mount, shallow } from "enzyme";
import TestUtils from "react-addons-test-utils";
import React from "react";
import TextInput from "./textInput.jsx";

describe("<TextInput />", () => {
    const props = {
        value: "",
        onChange: function () { },
        name: "",
        label: ""
    };

    it("The input element has a class of 'mdl-textfield__input'", () => {

        const wrapper = shallow(<TextInput {...props} />);
        const expected = "mdl-textfield__input";
        let actual = wrapper.find("input").props().className;

        expect(actual).toEqual(expected);
    });

    it("The root element is a div with a class of 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label'", () => {

        const wrapper = shallow(<TextInput {...props} />);
        const expected = "mdl-textfield mdl-js-textfield mdl-textfield--floating-label";
        let actual = wrapper.props().className;
        expect(actual).toEqual(expected);

    });


});