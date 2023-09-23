import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const NavBar = () => (
  <div className="bg-black">
    <ul className="m-auto flex h-16 w-full items-center justify-between px-4 text-white md:w-8/12 md:px-0">
      <li className="hidden md:block">
        <img src={logo} alt="Logo" className="h-10 text-white invert" />
      </li>
      <li>
        <Link to="/">
          <p className="font-dancing-script text-3xl duration-300 hover:scale-125">
            Mr. Cocktail
          </p>
        </Link>
      </li>
      <li>
        <Link to="/">
          <p className="text-2xl font-bold duration-300 hover:scale-125">
            Home
          </p>
        </Link>
      </li>
    </ul>
  </div>
);

export default NavBar;
