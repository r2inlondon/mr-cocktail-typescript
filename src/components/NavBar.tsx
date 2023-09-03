import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const NavBar = () => (
  <div className="bg-black">
    <ul className="flex h-16 items-center justify-between text-white">
      <li>
        <img src={logo} alt="Logo" className="h-10 text-white invert " />
      </li>
      <li>
        <Link to="/">
          <p className="">Home</p>
        </Link>
      </li>
      {/* <li>
        <Link to="/new">New Cocktail</Link>
      </li> */}
    </ul>
  </div>
);

export default NavBar;
