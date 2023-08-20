import { cocktailType } from "../state/reducers/cocktails/cocktailReducerTypes";

type propsType = {
  text: string;
  sortBy: string;
};

const cocktailsSelector = (
  cocktails: cocktailType[],
  { text, sortBy }: propsType
) => {
  return cocktails
    .filter((cocktail) => {
      const textMatch = cocktail.name
        .toLowerCase()
        .includes(text.toLowerCase());
      return textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "name") {
        return a.name < b.name ? -1 : 1;
      } else {
        return a.id < b.id ? 1 : -1;
      }
    });
};

export default cocktailsSelector;
