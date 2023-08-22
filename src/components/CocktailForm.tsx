import { useState, Fragment, useEffect } from "react";
import { CocktailType } from "../state/reducers/cocktails/cocktailTypes";
import { v1 as uuidv1 } from "uuid";

type PropsType = {
  handleAddCocktail: (cocktail: CocktailType) => void;
  cocktailToEdit?: CocktailType;
};

const CocktailForm = ({ handleAddCocktail, cocktailToEdit }: PropsType) => {
  const [newCocktailName, setNewCocktailName] = useState<string>("");

  useEffect(() => {
    if (cocktailToEdit) setNewCocktailName(cocktailToEdit.name);
  }, [cocktailToEdit]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const v1options = {
      msecs: new Date().getTime(),
    };

    const id: string = uuidv1(v1options);

    if (cocktailToEdit) {
      handleAddCocktail({ id: cocktailToEdit.id, name: newCocktailName });
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
        <button>{cocktailToEdit ? "Update" : "Add"}</button>
      </form>
    </Fragment>
  );
};

export default CocktailForm;
