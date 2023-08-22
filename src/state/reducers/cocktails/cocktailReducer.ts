import {
  CocktailAction,
  CocktailType,
  CocktailActionType,
} from "./cocktailTypes";

const initialState: CocktailType[] = [];

const cocktailReducer = (state = initialState, action: CocktailAction) => {
  switch (action.type) {
    case CocktailActionType.NEW:
      return [...state, action.payload];
    case CocktailActionType.EDIT:
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, name: action.updates };
        } else {
          return item;
        }
      });
    case CocktailActionType.DELETE:
      return state.filter((item) => item.name !== action?.payload?.id);
    default:
      return state;
  }
};

export default cocktailReducer;
