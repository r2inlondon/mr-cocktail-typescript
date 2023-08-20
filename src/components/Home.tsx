import { connect } from "react-redux";
import {
  cocktailType,
  RootState,
} from "../state/reducers/cocktails/cocktailReducerTypes";

type HomeProps = {
  cocktails: cocktailType[];
};

const Home = ({ cocktails }: HomeProps) => {
  return (
    <>
      <h1>Home Page</h1>
      <ul>
        {cocktails.map((cocktail, index) => (
          <li key={index}>{cocktail.name}</li>
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  cocktails: state.cocktailReducer,
});

export default connect(mapStateToProps)(Home);
