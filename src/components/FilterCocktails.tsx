import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Fragment, useState, useEffect } from "react";
import { FilterRootState } from "../state/reducers/stateTypes";
import { FilterTypes } from "../state/reducers/filters/filterTypes";
import {
  sortByName,
  sortByNewest,
} from "../state/actions-creators/filterActions";

type ConnectProps = {
  dispatch: Dispatch;
  filterState: FilterTypes;
};

const FilterCocktails = ({ dispatch, filterState }: ConnectProps) => {
  const [filter, setFilter] = useState(filterState.sortBy);

  useEffect(() => {
    if (filter === "name") {
      dispatch(sortByName());
    } else {
      dispatch(sortByNewest());
    }
  }, [filter, dispatch]);

  return (
    <Fragment>
      <select
        name="filter-coctkails"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
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
