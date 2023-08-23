export type CocktailType = {
  id: string;
  name: string;
  image?: string;
};

export enum CocktailActionType {
  NEW = "NEW",
  DELETE = "DELETE",
  EDIT = "EDIT",
}

type NewCocktailAction = {
  type: CocktailActionType.NEW;
  payload: CocktailType;
};

type DeleteCocktailAction = {
  type: CocktailActionType.DELETE;
  payload?: CocktailType;
};

export type EditCocktailAction = {
  type?: CocktailActionType.EDIT;
  id: string;
  updates: string;
};

export type CocktailAction =
  | NewCocktailAction
  | DeleteCocktailAction
  | EditCocktailAction;
