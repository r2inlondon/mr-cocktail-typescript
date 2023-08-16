import { addCocktail } from "../../state/actions-creators/actions";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { cocktailType } from "../../state/reducers/reducersTypes";

type ConnectProps = {
  dispatch: Dispatch;
};

const Home = ({ dispatch }: ConnectProps) => {
  const handleAddCocktail = () => {
    const newCocktail: cocktailType = {
      name: "test",
      image: "test",
    };

    dispatch(addCocktail(newCocktail));
  };

  return (
    <>
      <h1>Home Page</h1>
      <button onClick={handleAddCocktail}>Add Cocktail</button>
    </>
  );
};

export default connect()(Home);
