import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NewCocktailPage from "./components/NewCocktailPage";
import ShowCocktailPage from "./components/ShowCocktailPage";
import EditCocktailPage from "./components/EditCocktailPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewCocktailPage />} />
        <Route path="/:id" element={<ShowCocktailPage />} />
        <Route path="/edit/:id" element={<EditCocktailPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
