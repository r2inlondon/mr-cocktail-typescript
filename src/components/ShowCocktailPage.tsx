import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Link } from "react-router-dom";
import { cocktailRootState } from "../state/reducers/stateTypes";
import {
  CocktailType,
  IngredientType,
} from "../state/reducers/cocktails/cocktailTypes";
import {
  deleteCocktail,
  addIngredient,
  deleteIngredient,
} from "../state/actions-creators/cocktailActions";
import CocktailForm from "./CocktailForm";
import ListIngredients from "./ListIngredients";

type PropsType = {
  cocktails: CocktailType[];
  dispatch: Dispatch;
};

const ShowCocktailPage = ({ cocktails, dispatch }: PropsType) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [theCocktail, setTheCocktail] = useState<CocktailType>({
    id: "",
    description: "",
    ingredients: [],
  });

  useEffect(() => {
    if (cocktails.length === 0) return console.log("No cocktail to show");

    const cocktailFound = cocktails.find((item) => {
      return item.id === id;
    });

    if (cocktailFound) setTheCocktail(cocktailFound);

    if (!cocktailFound) navigate("/");
  }, [cocktails, id, navigate]);

  const handleDelete = () => {
    if (!id) return console.log("error");

    dispatch(deleteCocktail(id));
    navigate("/");
  };

  const handleAddIngredient = (newIngredient: IngredientType) => {
    newIngredient.cocktail_id = id;
    dispatch(addIngredient(newIngredient));
  };

  const handleDeleteIngredient = (ingredient_id: string) => {
    if (!id) return console.log("No cocktail to delete ingredient from");

    dispatch(deleteIngredient(id, ingredient_id));
  };

  return (
    <div>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <h2>{theCocktail.description}</h2>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "space-between",
            width: "45%",
          }}
        >
          <Link to={`/edit/${theCocktail.id}`}>
            <p>Edit</p>
          </Link>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
      <CocktailForm
        handleItem={handleAddIngredient}
        itemDescription="ingredients"
      />
      <ListIngredients
        ingredients={theCocktail.ingredients}
        handleDelete={handleDeleteIngredient}
      />
    </div>
  );
};

const mapStateToProps = (state: cocktailRootState) => ({
  cocktails: state.cocktailReducer,
});

export default connect(mapStateToProps)(ShowCocktailPage);
