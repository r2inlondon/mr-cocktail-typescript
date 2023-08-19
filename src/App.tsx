import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NewCocktailPage from "./components/NewCocktailPage";
import NavBar from "./components/NavBar";
import "./App.css";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewCocktailPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
