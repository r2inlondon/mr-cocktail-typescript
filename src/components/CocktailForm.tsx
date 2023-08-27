import { Fragment, useState, useEffect } from "react";

type PropsType = {
  label: string;
  handleItem: (item: string) => void;
  cocktailToEdit?: string;
};

const CocktailForm = ({ label, handleItem, cocktailToEdit }: PropsType) => {
  const [newItem, setNewItem] = useState<string>("");

  useEffect(() => {
    if (cocktailToEdit) setNewItem(cocktailToEdit);
  }, [cocktailToEdit]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const checkedDescription = newItem.trim();
    const reg = /^\s/;

    if (reg.test(checkedDescription) || checkedDescription.length < 3) {
      alert(`${label} is too short`);
      return;
    }

    handleItem(newItem);

    setNewItem("");
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          type="text"
          placeholder={`Enter ${label}`}
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button>{cocktailToEdit ? "Update" : "Add"}</button>
      </form>
    </Fragment>
  );
};

export default CocktailForm;
