import { Fragment, useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { CocktailType } from "../state/reducers/cocktails/cocktailTypes";
import { startAddCocktail } from "../state/actions-creators/cocktailActions";
import Modal from "./Modal";
import CocktailForm from "./CocktailForm";

type ConnectProps = {
  dispatch: Dispatch;
};

const Hero = ({ dispatch }: ConnectProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleAddCocktail = (userInput: string) => {
    const newCocktail: CocktailType = {
      name: userInput,
      ingredients: [],
    };

    dispatch(startAddCocktail(newCocktail));
    setShowModal(false);
  };

  return (
    <Fragment>
      <div className="relative h-72">
        <div
          id="hero-img"
          className=" h-full bg-slate-800 bg-center lg:bg-[url('./assets/bg-hero.jpg')] "
        ></div>
        <div className="absolute inset-0 bg-slate-950 opacity-60"></div>
        <div
          id="hero-txt"
          className="absolute left-1/2 top-1/2 z-10 w-11/12 -translate-x-1/2 -translate-y-1/2 transform space-y-4 text-center text-white"
        >
          <h1 className="text-xl sm:m-auto sm:mb-10 sm:w-[34rem] sm:text-center lg:text-2xl">
            Check out our cocktail recipes, and feel free to add your own!
          </h1>
          <button
            onClick={() => setShowModal(true)}
            className="rounded-md bg-btn-color-pri px-4 py-2 text-center font-medium duration-300 hover:scale-110"
          >
            Add New
          </button>
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <CocktailForm label="Cocktail" handleItem={handleAddCocktail} />
      </Modal>
    </Fragment>
  );
};

export default connect()(Hero);
