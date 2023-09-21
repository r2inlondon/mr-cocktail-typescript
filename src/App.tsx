import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NewCocktailPage from "./components/NewCocktailPage";
import ShowCocktailPage from "./components/ShowCocktailPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewCocktailPage />} />
        <Route path="/:id" element={<ShowCocktailPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
