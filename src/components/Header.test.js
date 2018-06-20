import { shallow } from "enzyme";
import React from "react";
import Header from "./Header";

it("test", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
