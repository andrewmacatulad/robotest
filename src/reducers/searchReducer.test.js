import { CHANGE_SEARCHFIELD } from "../actions/types";

import searchReducer from "./searchReducer";

describe("searchRobots", () => {
  const initialStateSearch = {
    searchField: ""
  };
  it("should return the initial state", () => {
    expect(searchReducer(undefined, {})).toEqual(initialStateSearch);
  });

  it("should handle CHANGE_SEARCHFIELD", () => {
    expect(
      searchReducer(initialStateSearch, {
        type: CHANGE_SEARCHFIELD,
        payload: "abc"
      })
    ).toEqual({ searchField: "abc" });
  });
});
