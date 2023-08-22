import { useState, Fragment, useEffect } from "react";
import { CocktailType } from "../state/reducers/cocktails/cocktailTypes";
import { v1 as uuidv1 } from "uuid";

type PropsType = {
  handleAddCocktail: (cocktail: CocktailType) => void;
  cocktail?: CocktailType;
};

const CocktailForm = ({ handleAddCocktail, cocktail }: PropsType) => {
  const [newCocktailName, setNewCocktailName] = useState<string>("");

  useEffect(() => {
    if (cocktail) setNewCocktailName(cocktail.name);
  }, [cocktail]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const v1options = {
      msecs: new Date().getTime(),
    };

    const id: string = uuidv1(v1options);

    if (cocktail) {
      handleAddCocktail({ id: cocktail.id, name: newCocktailName });
    } else {
      handleAddCocktail({ id, name: newCocktailName });
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          type="text"
          placeholder="Cocktail name"
          value={newCocktailName}
          onChange={(e) => setNewCocktailName(e.target.value)}
        />
        <button>{cocktail ? "Update" : "Add"}</button>
      </form>
    </Fragment>
  );
};

export default CocktailForm;
