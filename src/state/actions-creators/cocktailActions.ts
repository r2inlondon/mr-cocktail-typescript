import {
  CocktailType,
  CocktailActionType,
  EditCocktailAction,
  IngredientType,
} from "../reducers/cocktails/cocktailTypes";

// export const startAddCocktail = (cocktail: CocktailType) => {

// }

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

export const deleteIngredient = (id: string, ingredient_id: string) => {
  return {
    type: CocktailActionType.DELETE_ING,
    id,
    ingredient_id,
  };
};
