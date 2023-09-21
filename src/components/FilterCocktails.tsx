import { connect } from "react-redux";
import { Dispatch } from "redux";
import { useState, useEffect } from "react";
import { FilterRootState } from "../state/reducers/stateTypes";
import { FilterTypes } from "../state/reducers/filters/filterTypes";
import sortingIcon from "../assets/sorting-icon.svg";
import searchIcon from "../assets/search-icon.svg";
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
  const [showOptions, setShowOptions] = useState(false);
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

  const handleFilter = (filter: string) => {
    setSortby(filter);
    setShowOptions(!showOptions);
  };

  return (
    <div className="flex justify-around">
      <div>
        <button
          className="shadowfocus:outline-none flex w-40 flex-row justify-between rounded-md border-2 border-white bg-white px-2 py-2 text-gray-700 md:w-44 md:w-44"
          name="filter-coctkails"
          value={sortBy}
          onClick={() => setShowOptions(!showOptions)}
        >
          Sort by<span className="text-pink-500">{sortBy}</span>
          <img src={sortingIcon} alt="sorting" />
        </button>
        {showOptions && (
          <div className="mt-2 rounded-lg bg-white py-2 shadow-xl">
            <div
              className="block cursor-pointer px-4 py-2 text-gray-800 hover:bg-cyan-100 "
              id="newest"
              onClick={() => handleFilter("newest")}
            >
              Newest
            </div>
            <div
              className="block cursor-pointer px-4 py-2 text-gray-800 hover:bg-cyan-100 "
              id="name"
              onClick={() => handleFilter("name")}
            >
              Name
            </div>
          </div>
        )}
      </div>
      <h3 className="hidden md:block md:text-lg">Cocktails and recipes</h3>
      <div className="relative h-11 w-44">
        <svg
          className="absolute left-1 top-1/2 -translate-y-1/2 transform "
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill={search ? "cyan" : "gray"}
            d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"
          />
        </svg>
        <input
          className="h-full w-full rounded-md pl-8 focus:outline-none focus:ring-2 focus:ring-cyan-200"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search cocktails"
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state: FilterRootState) => ({
  filterState: state.filterReducer,
});

export default connect(mapStateToProps)(FilterCocktails);
