import {
  CocktailAction,
  cocktailType,
  CocktailActionType,
} from "./cocktailReducerTypes";

const initialState: cocktailType[] = [];

const cocktailReducer = (state = initialState, action: CocktailAction) => {
  switch (action.type) {
    case CocktailActionType.NEW:
      return [...state, action.payload];
    case CocktailActionType.DELETE:
      return state.filter((item) => item.name !== action?.payload?.name);
    default:
      return state;
  }
};

export default cocktailReducer;
