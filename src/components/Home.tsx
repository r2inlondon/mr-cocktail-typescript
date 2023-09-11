import { Fragment } from "react";
import { connect } from "react-redux";
import { CocktailType } from "../state/reducers/cocktails/cocktailTypes";
import { RootState } from "../state/reducers/stateTypes";
import FilterCocktails from "./FilterCocktails";
import cocktailsSelector from "../selectors/cocktailsSelector";
import Hero from "./Hero";
import ListCocktails from "./ListCocktails";

type HomeProps = {
  cocktails: CocktailType[];
};

const Home = ({ cocktails }: HomeProps) => {
  return (
    <Fragment>
      <Hero />
      <div className="my-10">
        <FilterCocktails />
      </div>
      <ListCocktails cocktails={cocktails} />
    </Fragment>
  );
};

const mapStateToProps = (state: RootState) => ({
  cocktails: cocktailsSelector(state.cocktailReducer, state.filterReducer),
});

export default connect(mapStateToProps)(Home);
