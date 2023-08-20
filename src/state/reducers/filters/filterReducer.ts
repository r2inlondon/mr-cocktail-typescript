import { FilterType, FilterAction, FilterActionType } from "./filterTypes";

const filtersReducerDefaultState: FilterType = {
  text: "",
  sortBy: "newest",
};

const filtersReducer = (
  state = filtersReducerDefaultState,
  action: FilterAction
) => {
  switch (action.type) {
    case FilterActionType.SET_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    case FilterActionType.SORT_BY_NAME:
      return {
        ...state,
        sortBy: "newest",
      };
    case FilterActionType.SORT_BY_NEW:
      return {
        ...state,
        sortBy: "newest",
      };
    default:
      return state;
  }
};

export default filtersReducer;
