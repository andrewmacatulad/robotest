import { shallow } from "enzyme";
import React from "react";
import Card from "./Card";

it("test", () => {
  const wrapper = shallow(<Card />);
  expect(wrapper).toMatchSnapshot();
});
