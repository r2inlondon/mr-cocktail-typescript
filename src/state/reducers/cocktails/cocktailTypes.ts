export type CocktailType = {
  id?: string;
  name: string;
  image?: string;
  ingredients: IngredientType[];
};

export type IngredientType = {
  id?: number;
  description: string;
  cocktail_id: string;
};

export enum CocktailActionType {
  SET_COCKTAILS = "SET_COCKTAILS",
  NEW = "NEW",
  DELETE = "DELETE",
  EDIT = "EDIT",
  NEW_ING = "NEW_ING",
  DELETE_ING = "DELETE_ING",
}

export type CocktailSetType = {
  type: CocktailActionType.SET_COCKTAILS;
  payload: CocktailType[];
};

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
  name: string;
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
  | TypeDeleteIngredient
  | CocktailSetType;
