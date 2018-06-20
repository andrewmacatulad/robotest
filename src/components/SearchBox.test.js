import { shallow } from "enzyme";
import React from "react";
import SearchBox from "./SearchBox";

it("test", () => {
  const wrapper = shallow(<SearchBox />);
  expect(wrapper).toMatchSnapshot();
});
