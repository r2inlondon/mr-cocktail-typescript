import { cocktailType } from "./cocktails/cocktailReducerTypes";
import { FilterTypes } from "./filters/filterTypes";

export type RootState = {
  cocktailReducer: cocktailType[];
  filterReducer: FilterTypes;
};
