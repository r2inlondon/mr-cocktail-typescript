import { Link } from "react-router-dom";
import { CocktailType } from "../state/reducers/cocktails/cocktailTypes";

type PropsType = {
  cocktails: CocktailType[];
};

const ListCocktails = ({ cocktails }: PropsType) => {
  return (
    <div className="m-auto flex w-11/12 flex-wrap justify-center gap-4 pb-36 md:gap-12">
      {cocktails.map((cocktail) => (
        <Link to={`/${cocktail.id}`} key={cocktail.id}>
          <div className="relative h-36 w-36 overflow-hidden rounded-md shadow-xl shadow-gray-300 md:h-72 md:w-72">
            <div className="h-full w-full bg-black"></div>
            <p className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center text-white md:text-3xl">
              {cocktail.name}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ListCocktails;
