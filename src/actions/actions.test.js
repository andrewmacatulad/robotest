import { setSearchField, requestRobots } from "./";
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "../actions/types";
import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

describe("actions", () => {
  const mockStore = configureMockStore([thunkMiddleware]);
  it("should create an action to search robots", () => {
    const text = "sample";
    const expectedAction = {
      type: CHANGE_SEARCHFIELD,
      payload: text
    };
    expect(setSearchField(text)).toEqual(expectedAction);
  });

  it("should create an action to search robots", () => {
    const store = mockStore();
    store.dispatch(requestRobots());
    const action = store.getActions();
    const expectAction = {
      type: REQUEST_ROBOTS_PENDING
    };

    expect(action[0]).toEqual(expectAction);
  });
});
