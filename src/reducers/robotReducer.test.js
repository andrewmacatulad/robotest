import {
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "../actions/types";

import robotReducer from "./robotReducer";

describe("robotReducer", () => {
  const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ""
  };
  it("should return the initial state", () => {
    expect(robotReducer(undefined, {})).toEqual(initialStateRobots);
  });

  it("should handle REQUESTS_PENDING reducer", () => {
    expect(
      robotReducer(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING
      })
    ).toEqual({
      isPending: true,
      robots: [],
      error: ""
    });
  });

  it("should handle REQUESTS_SUCESS reducer", () => {
    expect(
      robotReducer(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: 123,
            name: "test",
            email: "test@test.com"
          }
        ]
      })
    ).toEqual({
      isPending: false,
      robots: [
        {
          id: 123,
          name: "test",
          email: "test@test.com"
        }
      ],
      error: ""
    });
  });

  it("should handle REQUESTS_FAILED reducer", () => {
    expect(
      robotReducer(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: "THIS IS WRONG"
      })
    ).toEqual({
      isPending: false,
      robots: [],
      error: "THIS IS WRONG"
    });
  });
});
