import { connect } from "react-redux";
import { Dispatch } from "redux";
import { useNavigate } from "react-router-dom";
import SingleInputForm from "./SingleInputForm";
import { CocktailType } from "../state/reducers/cocktails/cocktailTypes";
import { addCocktail } from "../state/actions-creators/cocktailActions";
import { v1 as uuidv1 } from "uuid";

type ConnectProps = {
  dispatch: Dispatch;
};

const NewCocktailPage = ({ dispatch }: ConnectProps) => {
  const navigate = useNavigate();

  const handleAddCocktail = (userInput: string) => {
    const v1options = {
      msecs: new Date().getTime(),
    };

    const cocktail_id: string = uuidv1(v1options);

    const newCocktail: CocktailType = {
      id: cocktail_id,
      description: userInput,
      ingredients: [],
    };

    dispatch(addCocktail(newCocktail));
    navigate("/");
  };

  return <SingleInputForm label="Cocktail" handleItem={handleAddCocktail} />;
};

export default connect()(NewCocktailPage);
