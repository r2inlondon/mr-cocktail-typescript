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
          return { ...item, description: action.updates };
        } else {
          return item;
        }
      });
    case CocktailActionType.DELETE:
      return state.filter((item) => item.id !== action.id);
    case CocktailActionType.NEW_ING:
      return state.map((item) => {
        if (item.id === action.payload.cocktail_id) {
          const updatedIngredients = item.ingredients
            ? [...item.ingredients, action.payload]
            : [action.payload];
          return {
            ...item,
            ingredients: updatedIngredients,
          };
        }
      });
    case CocktailActionType.DELETE_ING:
      return state.map((item) => {
        if (item.id === action.id) {
          const updatedIngredients = item.ingredients?.filter(
            (ing) => ing.id !== action.ingredient_id
          );
          return {
            ...item,
            ingredients: updatedIngredients,
          };
        }
      });
    default:
      return state;
  }
};

export default cocktailReducer;
