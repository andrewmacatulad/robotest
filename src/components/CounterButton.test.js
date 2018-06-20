import { shallow } from "enzyme";
import React from "react";
import CounterButton from "./CounterButton";

it("test", () => {
  const mockColor = "blue";
  const wrapper = shallow(<CounterButton color={mockColor} />);
  expect(wrapper).toMatchSnapshot();
});

it("correctly increments the counter", () => {
  const mockColor = "blue";
  const wrapper = shallow(<CounterButton color={mockColor} />);
  wrapper.find('[id="counter"]').simulate("click");
  wrapper.find('[id="counter"]').simulate("click");
  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.state()).toEqual({ count: 3 });
  expect(wrapper.props().color).toEqual("blue");
});
