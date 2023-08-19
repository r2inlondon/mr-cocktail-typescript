import { useState, Fragment } from "react";
import { cocktailType } from "../state/reducers/reducersTypes";

type PropsType = {
  handleAddCocktail: (cocktail: cocktailType) => void;
};

const CocktailForm = ({ handleAddCocktail }: PropsType) => {
  const [cocktailName, setCocktailName] = useState<string>("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    handleAddCocktail({ name: cocktailName });
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Cocktail name"
          onChange={(e) => setCocktailName(e.target.value)}
        />
        <button>Add cocktail</button>
      </form>
    </Fragment>
  );
};

export default CocktailForm;
