import { shallow } from "enzyme";
import React from "react";
import MainPage from "./MainPage";

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false
  };

  wrapper = shallow(<MainPage {...mockProps} />);
});
it("renders Mainpage without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

it("filters robots correctly", () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 2,
        name: "Plue",
        email: "plue@plue.com"
      }
    ],
    searchField: "plue",
    isPending: false
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper2.instance().filterRobots()).toEqual([
    {
      id: 2,
      name: "Plue",
      email: "plue@plue.com"
    }
  ]);
});

it("filters robots correctly2", () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 2,
        name: "Plue",
        email: "plue@plue.com"
      }
    ],
    searchField: "plue",
    isPending: false
  };

  const filteredRobots = [
    {
      id: 2,
      name: "Plue",
      email: "plue@plue.com"
    }
  ];
  const wrapper3 = shallow(<MainPage {...mockProps3} />);
  expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
});
