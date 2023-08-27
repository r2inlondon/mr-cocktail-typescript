import { connect } from "react-redux";
import { Dispatch } from "redux";
import { useNavigate } from "react-router-dom";
import CocktailForm from "./CocktailForm";
import { CocktailType } from "../state/reducers/cocktails/cocktailTypes";
import { startAddCocktail } from "../state/actions-creators/cocktailActions";
import type {} from "redux-thunk/extend-redux";

type ConnectProps = {
  dispatch: Dispatch;
};

const NewCocktailPage = ({ dispatch }: ConnectProps) => {
  const navigate = useNavigate();

  const handleAddCocktail = (userInput: string) => {
    const newCocktail: CocktailType = {
      name: userInput,
      ingredients: [],
    };

    dispatch(startAddCocktail(newCocktail));
    navigate("/");
  };

  return <CocktailForm label="Cocktail" handleItem={handleAddCocktail} />;
};

export default connect()(NewCocktailPage);
