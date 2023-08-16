import { Action, cocktailType, ActionType } from "./reducersTypes";

const initialState: cocktailType[] = [];

const reducer = (state = initialState, action: Action) => {
  console.log(action.type);
  switch (action.type) {
    case ActionType.NEW:
      return [...state, action.payload];
    case ActionType.DELETE:
      return state.filter((item) => item.name !== action?.payload?.name);
    default:
      return state;
  }
};

export default reducer;
