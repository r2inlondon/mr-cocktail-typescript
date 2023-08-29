export type CocktailType = {
  id?: number;
  name: string;
  image?: string;
  ingredients: IngredientType[];
};

export type IngredientType = {
  id?: number;
  description: string;
  cocktail_id: number;
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
  id: number;
};

export type EditCocktailAction = {
  type?: CocktailActionType.EDIT;
  id: number;
  name: string;
};

export type TypeAddIngredient = {
  type: CocktailActionType.NEW_ING;
  payload: IngredientType;
};

export type TypeDeleteIngredient = {
  type: CocktailActionType.DELETE_ING;
  id: number;
  ingredient_id: number;
};

export type CocktailAction =
  | NewCocktailAction
  | DeleteCocktailAction
  | EditCocktailAction
  | TypeAddIngredient
  | TypeDeleteIngredient
  | CocktailSetType;
