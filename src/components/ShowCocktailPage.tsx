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
  startDeleteCocktail,
  addIngredient,
  deleteIngredient,
} from "../state/actions-creators/cocktailActions";
import CocktailForm from "./CocktailForm";
import ListIngredients from "./ListIngredients";
import { v1 as uuidv1 } from "uuid";

type PropsType = {
  cocktails: CocktailType[];
  dispatch: Dispatch;
};

const ShowCocktailPage = ({ cocktails, dispatch }: PropsType) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [theCocktail, setTheCocktail] = useState<CocktailType>({
    id: "",
    name: "",
    ingredients: [],
  });

  useEffect(() => {
    if (cocktails.length === 0) return console.log("No cocktail to show");

    const cocktailFound = cocktails.find((item) => {
      return item.id === id;
    });

    if (cocktailFound) setTheCocktail(cocktailFound);

    // if (!cocktailFound) navigate("/");
  }, [cocktails, id, navigate]);

  const handleDelete = () => {
    if (!id) return console.log("error");

    dispatch(startDeleteCocktail(id));
    navigate("/");
  };

  const handleAddIngredient = (ingredient: string) => {
    const v1options = {
      msecs: new Date().getTime(),
    };

    const Ingredient_id: string = uuidv1(v1options);

    const newIngredient: IngredientType = {
      id: Ingredient_id,
      description: ingredient,
      cocktail_id: id,
    };

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
        <h2>{theCocktail.name}</h2>
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
      <CocktailForm handleItem={handleAddIngredient} label="ingredients" />
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
