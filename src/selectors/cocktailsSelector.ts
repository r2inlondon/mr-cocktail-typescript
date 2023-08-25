import { CocktailType } from "../state/reducers/cocktails/cocktailTypes";

type propsType = {
  text: string;
  sortBy: string;
};

const cocktailsSelector = (
  cocktails: CocktailType[],
  { text, sortBy }: propsType
) => {
  return cocktails
    .filter((cocktail) => {
      const textMatch = cocktail.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "name") {
        return a.description < b.description ? -1 : 1;
      } else {
        return a.id < b.id ? 1 : -1;
      }
    });
};

export default cocktailsSelector;
