export type cocktailType = {
  name: string;
  image?: string;
};

export enum ActionType {
  NEW = "NEW",
  DELETE = "DELETE",
}

type NewAction = {
  type: ActionType.NEW;
  payload?: cocktailType;
};

type DeleteAction = {
  type: ActionType.DELETE;
  payload?: cocktailType;
};

export type Action = NewAction | DeleteAction;
