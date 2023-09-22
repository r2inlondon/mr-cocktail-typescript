import { IngredientType } from "../state/reducers/cocktails/cocktailTypes";
import binIcon from "../assets/bin-icon.svg";

type IngredientListType = {
  ingredients: IngredientType[];
  handleDelete: (id: number) => void;
};

const ListIngredients = ({ ingredients, handleDelete }: IngredientListType) => {
  return (
    <div className="m-auto w-11/12">
      {ingredients?.length === 0 && (
        <p className="text-center text-pink-600">Please provide ingredients</p>
      )}
      {ingredients &&
        ingredients.map((item) => (
          <div key={item.id} className="mb-3 flex justify-between">
            <p className="text-lg ">{item.description}</p>
            <button onClick={() => handleDelete(item.id as number)}>
              <img src={binIcon} alt="binIcon" />
            </button>
          </div>
        ))}
    </div>
  );
};

export default ListIngredients;
