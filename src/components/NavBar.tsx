import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const NavBar = () => (
  <div className="bg-black">
    <ul className="m-auto flex h-16 w-8/12 items-center justify-between text-white">
      <li>
        <img src={logo} alt="Logo" className="h-10 text-white invert" />
      </li>
      <li>
        <p className="font-dancing-script text-3xl ">Mr. Cocktail</p>
      </li>
      <li>
        <Link to="/">
          <p className="text-2xl font-bold duration-300 hover:scale-125">
            Home
          </p>
        </Link>
      </li>
      {/* <li>
        <Link to="/new">New Cocktail</Link>
      </li> */}
    </ul>
  </div>
);

export default NavBar;
