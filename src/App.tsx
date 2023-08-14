import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NewCocktailForm from "./components/new-cocktail/NewCocktailForm";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewCocktailForm />} />
      </Routes>
    </Fragment>
  );
}

export default App;
