import { Fragment } from "react";
import { connect } from "react-redux";
import { CocktailType } from "../state/reducers/cocktails/cocktailTypes";
import { RootState } from "../state/reducers/stateTypes";
import FilterCocktails from "./FilterCocktails";
import cocktailsSelector from "../selectors/cocktailsSelector";
import Hero from "./Hero";
import ListCocktails from "./ListCocktails";
import Footer from "./Footer";

type HomeProps = {
  cocktails: CocktailType[];
};

const Home = ({ cocktails }: HomeProps) => {
  return (
    <Fragment>
      <Hero />
      <FilterCocktails />
      <ListCocktails cocktails={cocktails} />
      <Footer />
    </Fragment>
  );
};

const mapStateToProps = (state: RootState) => ({
  cocktails: cocktailsSelector(state.cocktailReducer, state.filterReducer),
});

export default connect(mapStateToProps)(Home);
