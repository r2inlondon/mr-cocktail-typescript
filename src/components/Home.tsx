import { connect } from "react-redux";
import { cocktailType } from "../state/reducers/cocktails/cocktailReducerTypes";
import { RootState } from "../state/reducers/stateTypes";
import FilterCocktails from "./FilterCocktails";
import cocktailsSelector from "../selectors/cocktailsSelector";

type HomeProps = {
  cocktails: cocktailType[];
};

const Home = ({ cocktails }: HomeProps) => {
  return (
    <>
      <h1>Home Page</h1>
      <FilterCocktails />
      <ul>
        {cocktails.map((cocktail) => (
          <li key={cocktail.id}>{cocktail.name}</li>
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  cocktails: cocktailsSelector(state.cocktailReducer, state.filterReducer),
});

export default connect(mapStateToProps)(Home);
