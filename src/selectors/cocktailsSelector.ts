import { cocktailType } from "../state/reducers/cocktails/cocktailReducerTypes";

type propsType = {
  text: string;
  sortBy: string;
  cocktails: cocktailType[];
};

const cocktailsSelector = (cocktails, { text, sortBy }: propsType) => {
  cocktails
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
        return a.name < b.name ? 1 : -1;
      }
    });
};

export default cocktailsSelector;
