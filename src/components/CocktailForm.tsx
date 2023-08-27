import { useState, Fragment, useEffect } from "react";
import { CocktailType } from "../state/reducers/cocktails/cocktailTypes";
import { v1 as uuidv1 } from "uuid";

type PropsType = {
  handleItem: (cocktail: CocktailType) => void;
  itemDescription?: string;
  cocktailToEdit?: CocktailType;
};

const CocktailForm = ({
  handleItem,
  itemDescription,
  cocktailToEdit,
}: PropsType) => {
  const [newItem, setNewItem] = useState<string>("");

  useEffect(() => {
    if (cocktailToEdit) setNewItem(cocktailToEdit.description);
  }, [cocktailToEdit]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const checkedDescription = newItem.trim();
    const reg = /^\s/;

    if (reg.test(checkedDescription) || checkedDescription.length < 3) {
      alert(`${itemDescription} is too short`);
      return;
    }

    const v1options = {
      msecs: new Date().getTime(),
    };

    const id: string = uuidv1(v1options);

    if (cocktailToEdit) {
      const editedCocktail = {
        ...cocktailToEdit,
        description: checkedDescription,
      };

      handleItem(editedCocktail);
    } else {
      handleItem({ id, description: checkedDescription, ingredients: [] });
    }

    setNewItem("");
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          type="text"
          placeholder={`Enter ${itemDescription}`}
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button>{cocktailToEdit ? "Update" : "Add"}</button>
      </form>
    </Fragment>
  );
};

export default CocktailForm;
