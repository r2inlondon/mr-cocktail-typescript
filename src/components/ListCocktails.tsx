import { Link } from "react-router-dom";
import { CocktailType } from "../state/reducers/cocktails/cocktailTypes";

type PropsType = {
  cocktails: CocktailType[];
};

const ListCocktails = ({ cocktails }: PropsType) => {
  return (
    <div className="m-auto flex w-11/12 flex-wrap justify-center gap-2 ">
      {cocktails.map((cocktail) => (
        <Link to={`/${cocktail.id}`}>
          <div
            key={cocktail.id}
            className="relative h-32 w-32 overflow-hidden rounded-md"
          >
            <div className="h-full w-full bg-black"></div>
            <h3 className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center text-white">
              {cocktail.name}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ListCocktails;
