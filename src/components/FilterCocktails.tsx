import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Fragment, useState, useEffect } from "react";
import {
  sortByName,
  sortByNewest,
} from "../state/actions-creators/filterActions";

type ConnectProps = {
  dispatch: Dispatch;
};

const FilterCocktails = ({ dispatch }: ConnectProps) => {
  const [filter, setFilter] = useState("newest");

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

export default connect()(FilterCocktails);
