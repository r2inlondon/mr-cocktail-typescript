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
      <form onSubmit={handleSubmit} className="mb-10 mt-3">
        <input
          autoFocus
          type="text"
          className="m-auto block w-10/12 rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 md:mb-4"
          placeholder={`Enter ${label}`}
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button className="m-auto block w-10/12 rounded-md bg-btn-color-pri px-4 py-2 text-center font-medium text-white duration-300 hover:bg-btn-color-hover">
          {cocktailToEdit ? "Update" : "Create"}
        </button>
      </form>
    </Fragment>
  );
};

export default CocktailForm;
