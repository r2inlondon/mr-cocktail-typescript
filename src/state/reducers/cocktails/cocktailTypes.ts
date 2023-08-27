export type CocktailType = {
  id: string;
  description: string;
  image?: string;
  ingredients: IngredientType[];
};

export type IngredientType = {
  id: string;
  description: string;
  cocktail_id?: string;
};

export enum CocktailActionType {
  NEW = "NEW",
  DELETE = "DELETE",
  EDIT = "EDIT",
  NEW_ING = "NEW_ING",
  DELETE_ING = "DELETE_ING",
}

type NewCocktailAction = {
  type: CocktailActionType.NEW;
  payload: CocktailType;
};

type DeleteCocktailAction = {
  type: CocktailActionType.DELETE;
  id: string;
};

export type EditCocktailAction = {
  type?: CocktailActionType.EDIT;
  id: string;
  updates: string;
};

export type TypeAddIngredient = {
  type: CocktailActionType.NEW_ING;
  payload: IngredientType;
};

export type TypeDeleteIngredient = {
  type: CocktailActionType.DELETE_ING;
  id: string;
  ingredient_id: string;
};

export type CocktailAction =
  | NewCocktailAction
  | DeleteCocktailAction
  | EditCocktailAction
  | TypeAddIngredient
  | TypeDeleteIngredient;
