import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NewCocktailPage from "./components/NewCocktailPage";
import ViewCocktail from "./components/ViewCocktail";
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
        <Route path="/:id" element={<ViewCocktail />} />
      </Routes>
    </Fragment>
  );
}

export default App;
