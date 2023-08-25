import { connect } from "react-redux";
import { Dispatch } from "redux";
import { useNavigate } from "react-router-dom";
import CocktailForm from "./CocktailForm";
import { CocktailType } from "../state/reducers/cocktails/cocktailTypes";
import { addCocktail } from "../state/actions-creators/cocktailActions";

type ConnectProps = {
  dispatch: Dispatch;
};

const NewCocktailPage = ({ dispatch }: ConnectProps) => {
  const navigate = useNavigate();

  const handleAddCocktail = (cocktail: CocktailType) => {
    if (!cocktail.ingredients) {
      cocktail.ingredients = [];
    }

    dispatch(addCocktail(cocktail));
    navigate("/");
  };

  return (
    <CocktailForm
      handleItem={handleAddCocktail}
      itemDescription="cocktail name"
    />
  );
};

export default connect()(NewCocktailPage);
