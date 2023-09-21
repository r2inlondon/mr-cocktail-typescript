import { useState, useEffect, Fragment } from "react";
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
  startAddIngredient,
  startDeleteIngredient,
  startEditCocktail,
} from "../state/actions-creators/cocktailActions";
import CocktailForm from "./CocktailForm";
import ListIngredients from "./ListIngredients";
import Modal from "./Modal";

type PropsType = {
  cocktails: CocktailType[];
  dispatch: Dispatch;
};

const ShowCocktailPage = ({ cocktails, dispatch }: PropsType) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [theCocktail, setTheCocktail] = useState<CocktailType>({
    name: "",
    ingredients: [],
  });

  useEffect(() => {
    if (cocktails.length === 0) return console.log("No cocktail to show");

    const cocktailFound = cocktails.find((item) => {
      return item.id === Number(id);
    });

    if (cocktailFound) setTheCocktail(cocktailFound);

    // if (!cocktailFound) navigate("/");
  }, [cocktails, id, navigate]);

  const handleDelete = () => {
    if (!id) return console.log("error");

    dispatch(startDeleteCocktail(Number(id)));
    navigate("/");
  };

  const handleAddIngredient = (ingredient: string) => {
    if (!id) return console.log("error");

    const newIngredient: IngredientType = {
      description: ingredient,
      cocktail_id: Number(id),
    };

    dispatch(startAddIngredient(newIngredient));
  };

  const handleDeleteIngredient = (ingredient_id: number) => {
    if (!id) return console.log("No cocktail to delete ingredient from");

    dispatch(startDeleteIngredient(Number(id), ingredient_id));
  };

  const handleEditCocktail = (updates: string) => {
    if (!theCocktail.id) return console.log("id error");

    dispatch(startEditCocktail(theCocktail.id, updates));

    setShowModal(false);
  };

  return (
    <Fragment>
      <div className="m-auto w-11/12">
        <div className="relative m-auto mt-8 h-64 w-64 overflow-hidden rounded-md shadow-xl shadow-gray-300 md:h-72 md:w-72">
          <div className="h-full w-full bg-black"></div>
          <p className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center text-3xl text-white">
            {theCocktail.name}
          </p>
        </div>
        <div>
          {/* <Link to={`/edit/${theCocktail.id}`}>
            <p>Edit</p>
          </Link> */}
          <button onClick={() => setShowModal(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
        <CocktailForm handleItem={handleAddIngredient} label="ingredients" />
        <ListIngredients
          ingredients={theCocktail.ingredients}
          handleDelete={handleDeleteIngredient}
        />
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <CocktailForm
          label="Cocktail"
          handleItem={handleEditCocktail}
          cocktailToEdit={theCocktail.name}
        />
      </Modal>
    </Fragment>
  );
};

const mapStateToProps = (state: cocktailRootState) => ({
  cocktails: state.cocktailReducer,
});

export default connect(mapStateToProps)(ShowCocktailPage);
