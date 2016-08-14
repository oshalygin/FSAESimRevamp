/* eslint-disable no-unused-vars */
import expect from "expect";
import { mount, shallow } from "enzyme";
import TestUtils from "react-addons-test-utils";
import React from "react";
import Contact from "./contact.jsx";

function setup() {
    return shallow(<Contact />);
}

describe("<Contact />", () => {

    it("Conact component includes a 'mailto:oshalygin@gmail.com'", () => {
        const wrapper = setup();

        let actual = wrapper.find("a").at(1).props().href;
        let expected = "mailto:oshalygin@gmail.com";

        expect(actual).toEqual(expected);

    });

    it("Conact component includes a 'Contact Oleg' heading", () => {
        const wrapper = setup();

        let actual = wrapper.find("a").children().at(1).node;
        let expected = "Contact Oleg";

        expect(actual).toEqual(expected);

    });

});