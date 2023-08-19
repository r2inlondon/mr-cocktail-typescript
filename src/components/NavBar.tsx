import { Fragment } from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <Fragment>
    <ul style={{ display: "flex", listStyle: "none", gap: "1rem" }}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/new">New Cocktail</Link>
      </li>
    </ul>
  </Fragment>
);

export default NavBar;
