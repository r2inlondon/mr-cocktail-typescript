export type cocktailType = {
  name: string;
  image?: string;
};

export enum CocktailActionType {
  NEW = "NEW",
  DELETE = "DELETE",
}

type NewCocktailAction = {
  type: CocktailActionType.NEW;
  payload?: cocktailType;
};

type DeleteCocktailAction = {
  type: CocktailActionType.DELETE;
  payload?: cocktailType;
};

export type RootState = {
  cocktailReducer: cocktailType[];
};

export type CocktailAction = NewCocktailAction | DeleteCocktailAction;
