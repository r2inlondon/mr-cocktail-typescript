import { combineReducers } from "redux";
import cocktailReducer from "./cocktailReducer";

const rootReducer = combineReducers({
  cocktailReducer,
});

export default rootReducer;
