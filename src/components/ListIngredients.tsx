import { Fragment } from "react";
import { IngredientType } from "../state/reducers/cocktails/cocktailTypes";

type IngredientListType = {
  ingredients: IngredientType[] | undefined;
  handleDelete: (id: string) => void;
};

const ListIngredients = ({ ingredients, handleDelete }: IngredientListType) => {
  return (
    <Fragment>
      {ingredients?.length === 0 && <p>Please provide ingredients</p>}
      {ingredients &&
        ingredients.map((item) => (
          <div
            key={item.id}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <p>{item.description}</p>
            <button onClick={() => handleDelete(item.id)}>Del</button>
          </div>
        ))}
    </Fragment>
  );
};

export default ListIngredients;