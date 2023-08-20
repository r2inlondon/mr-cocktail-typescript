export type FilterTypes = {
  text: string;
  sortBy: string;
};

export enum FilterActionType {
  SET_TEXT = "SET_TEXT",
  SORT_BY_NAME = "SORT_BY_NAME",
  SORT_BY_NEW = "SORT_BY_NEW",
}

type SetTextAction = {
  type: FilterActionType.SET_TEXT;
  payload: string;
};

type SetSortByAction = {
  type: FilterActionType.SORT_BY_NAME;
};

type SetSortByNewAction = {
  type: FilterActionType.SORT_BY_NEW;
};

export type FilterAction = SetTextAction | SetSortByAction | SetSortByNewAction;
