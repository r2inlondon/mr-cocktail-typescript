import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Fragment, useState, useEffect } from "react";
import { FilterRootState } from "../state/reducers/stateTypes";
import { FilterTypes } from "../state/reducers/filters/filterTypes";
import {
  sortByName,
  sortByNewest,
  setTextFilter,
} from "../state/actions-creators/filterActions";

type ConnectProps = {
  dispatch: Dispatch;
  filterState: FilterTypes;
};

const FilterCocktails = ({ dispatch, filterState }: ConnectProps) => {
  const [sortBy, setSortby] = useState(filterState.sortBy);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (sortBy === "name") {
      dispatch(sortByName());
    } else {
      dispatch(sortByNewest());
    }
  }, [sortBy, dispatch]);

  useEffect(() => {
    dispatch(setTextFilter(search));
  }, [search, dispatch]);

  return (
    <Fragment>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search cocktails"
      />
      <select
        name="filter-coctkails"
        value={sortBy}
        onChange={(e) => setSortby(e.target.value)}
      >
        <option value="newest">Newest</option>
        <option value="name">By Name</option>
      </select>
    </Fragment>
  );
};

const mapStateToProps = (state: FilterRootState) => ({
  filterState: state.filterReducer,
});

export default connect(mapStateToProps)(FilterCocktails);
