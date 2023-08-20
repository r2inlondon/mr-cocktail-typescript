import React from "react";
import { cocktailType } from "../state/reducers/cocktails/cocktailTypes";

type PropsType = {
  cocktails: cocktailType[];
};

const ListCocktails = ({ cocktails }: PropsType) => {
  return (
    <ul>
      {cocktails.map((cocktail) => (
        <li key={cocktail.id}>{cocktail.name}</li>
      ))}
    </ul>
  );
};

export default ListCocktails;
