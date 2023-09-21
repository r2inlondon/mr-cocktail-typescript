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
        <img src={searchIcon} alt="search" className="absolute " />
        <input
          className="h-full w-full pl-8"
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
