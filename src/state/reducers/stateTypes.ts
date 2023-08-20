import { cocktailType } from "./cocktails/cocktailTypes";
import { FilterTypes } from "./filters/filterTypes";

export type RootState = {
  cocktailReducer: cocktailType[];
  filterReducer: FilterTypes;
};

export type FilterRootState = {
  filterReducer: FilterTypes;
};
