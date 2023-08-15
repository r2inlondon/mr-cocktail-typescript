import { Dispatch } from "redux";
import { Action, cocktailType, ActionType } from "../reducers/reducersTypes";

export const addCocktail = (cocktail: cocktailType) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.NEW,
      payload: cocktail,
    });
  };
};

export const deleteCocktail = (cocktail: cocktailType) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DELETE,
      payload: cocktail,
    });
  };
};
