import { useState, Fragment } from "react";
import { cocktailType } from "../state/reducers/cocktails/cocktailReducerTypes";
import { v1 as uuidv1 } from "uuid";

type PropsType = {
  handleAddCocktail: (cocktail: cocktailType) => void;
};

const CocktailForm = ({ handleAddCocktail }: PropsType) => {
  const [cocktailName, setCocktailName] = useState<string>("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const v1options = {
      msecs: new Date().getTime(),
    };

    const id: string = uuidv1(v1options);
    handleAddCocktail({ name: cocktailName, id });
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
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
