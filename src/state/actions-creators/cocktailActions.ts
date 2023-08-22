import {
  CocktailType,
  CocktailActionType,
  EditCocktailAction,
} from "../reducers/cocktails/cocktailTypes";

export const addCocktail = (cocktail: CocktailType) => {
  return {
    type: CocktailActionType.NEW,
    payload: cocktail,
  };
};

export const editCocktail = ({ id, updates }: EditCocktailAction) => {
  return {
    type: CocktailActionType.EDIT,
    id,
    updates,
  };
};

export const deleteCocktail = (cocktail: CocktailType) => {
  return {
    type: CocktailActionType.DELETE,
    payload: cocktail,
  };
};
