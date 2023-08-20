import { Dispatch } from "redux";
import {
  CocktailAction,
  CocktailType,
  CocktailActionType,
} from "../reducers/cocktails/cocktailTypes";

export const addCocktail = (cocktail: CocktailType): CocktailAction => {
  return {
    type: CocktailActionType.NEW,
    payload: cocktail,
  };
};

export const deleteCocktail = (cocktail: CocktailType) => {
  return (dispatch: Dispatch<CocktailAction>) => {
    dispatch({
      type: CocktailActionType.DELETE,
      payload: cocktail,
    });
  };
};
