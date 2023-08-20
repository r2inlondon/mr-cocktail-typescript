import { Dispatch } from "redux";
import {
  CocktailAction,
  cocktailType,
  CocktailActionType,
} from "../reducers/cocktails/cocktailTypes";

export const addCocktail = (cocktail: cocktailType): CocktailAction => {
  return {
    type: CocktailActionType.NEW,
    payload: cocktail,
  };
};

export const deleteCocktail = (cocktail: cocktailType) => {
  return (dispatch: Dispatch<CocktailAction>) => {
    dispatch({
      type: CocktailActionType.DELETE,
      payload: cocktail,
    });
  };
};
