import { Link } from "react-router-dom";
import { CocktailType } from "../state/reducers/cocktails/cocktailTypes";

type PropsType = {
  cocktails: CocktailType[];
};

const ListCocktails = ({ cocktails }: PropsType) => {
  return (
    <ul>
      {cocktails.map((cocktail) => (
        <li key={cocktail.id}>
          <h3>
            <Link to={`/${cocktail.id}`}>{cocktail.name}</Link>
          </h3>
        </li>
      ))}
    </ul>
  );
};

export default ListCocktails;
