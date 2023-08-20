import { CocktailType } from "./cocktails/cocktailTypes";
import { FilterTypes } from "./filters/filterTypes";

export type RootState = {
  cocktailReducer: CocktailType[];
  filterReducer: FilterTypes;
};

export type cocktailRootState = {
  cocktailReducer: CocktailType[];
};

export type FilterRootState = {
  filterReducer: FilterTypes;
};
