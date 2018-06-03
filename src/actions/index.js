import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./types";

export const setSearchField = text => {
  return {
    type: CHANGE_SEARCHFIELD,
    payload: text
  };
};

export const requestRobots = () => async dispatch => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  // const res = await fetch("https://jsonplaceholder.typicode.com/users");

  try {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users`).then(
      res => res.json()
    );
    dispatch({
      type: REQUEST_ROBOTS_SUCCESS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: REQUEST_ROBOTS_FAILED,
      payload: err
    });
  }
};
