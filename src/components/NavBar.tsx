import { Fragment } from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <Fragment>
    <ul className="flex justify-between bg-black text-white">
      <li>
        <Link to="/">
          <p className="">Home</p>
        </Link>
      </li>
      <li>
        <Link to="/new">New Cocktail</Link>
      </li>
    </ul>
  </Fragment>
);

export default NavBar;
