import { combineReducers } from "redux";
import reducer from "./cocktailReducer";

const rootReducer = combineReducers({
  cocktailReducer: reducer,
});

export default rootReducer;
