import {
  CocktailType,
  CocktailActionType,
  EditCocktailAction,
  IngredientType,
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

export const deleteCocktail = (id: string) => {
  return {
    type: CocktailActionType.DELETE,
    id,
  };
};

export const addIngredient = (newIngredient: IngredientType) => {
  return {
    type: CocktailActionType.NEW_ING,
    payload: newIngredient,
  };
};
