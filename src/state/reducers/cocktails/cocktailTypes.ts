export type CocktailType = {
  id: string;
  name: string;
  image?: string;
};

export enum CocktailActionType {
  NEW = "NEW",
  DELETE = "DELETE",
}

type NewCocktailAction = {
  type: CocktailActionType.NEW;
  payload?: CocktailType;
};

type DeleteCocktailAction = {
  type: CocktailActionType.DELETE;
  payload?: CocktailType;
};

export type CocktailAction = NewCocktailAction | DeleteCocktailAction;
