import { connect } from "react-redux";
import { CocktailType } from "../state/reducers/cocktails/cocktailTypes";
import { RootState } from "../state/reducers/stateTypes";
import FilterCocktails from "./FilterCocktails";
import cocktailsSelector from "../selectors/cocktailsSelector";
import ListCocktails from "./ListCocktails";

type HomeProps = {
  cocktails: CocktailType[];
};

const Home = ({ cocktails }: HomeProps) => {
  return (
    <>
      <h1>Home Page</h1>
      <FilterCocktails />
      {/* {cocktails && <ListCocktails cocktails={cocktails} />} */}
      <ListCocktails cocktails={cocktails} />
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  cocktails: cocktailsSelector(state.cocktailReducer, state.filterReducer),
});

export default connect(mapStateToProps)(Home);
