import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import robotReducer from "./robotReducer";

export default combineReducers({
  search: searchReducer,
  robots: robotReducer
});
