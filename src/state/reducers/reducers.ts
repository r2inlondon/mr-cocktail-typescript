import { combineReducers } from "redux";
import cocktailReducer from "./cocktails/cocktailReducer";
import filterReducer from "./filters/filterReducer";

const rootReducer = combineReducers({
  cocktailReducer,
  filterReducer,
});

export default rootReducer;
