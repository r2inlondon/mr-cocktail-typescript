import { Dispatch } from "redux";
import {
  CocktailType,
  CocktailActionType,
  EditCocktailAction,
  IngredientType,
} from "../reducers/cocktails/cocktailTypes";

const setCocktails = (cocktails: CocktailType[]) => {
  return {
    type: CocktailActionType.SET_COCKTAILS,
    payload: cocktails,
  };
};

export const startSetCocktails = () => {
  return (dispatch: Dispatch) => {
    fetch(import.meta.env.VITE_BACKEND_URL)
      .then((response) => response.json())
      .then((response) => {
        const cocktails = response.data;
        cocktails.forEach((cocktail: CocktailType) => {
          cocktail.ingredients = [];
          cocktail.id = cocktail.id?.toString();
        });
        dispatch(setCocktails(cocktails));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
};

export const startAddCocktail = (cocktail: CocktailType) => {
  return (dispatch: Dispatch) => {
    fetch(import.meta.env.VITE_BACKEND_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cocktail),
    })
      .then((response) => response.json())
      .then((response) => {
        const newCocktail = response.data;
        newCocktail.ingredients = [];
        newCocktail.id = newCocktail.id.toString();
        dispatch(addCocktail(newCocktail));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
};

const addCocktail = (cocktail: CocktailType) => {
  return {
    type: CocktailActionType.NEW,
    payload: cocktail,
  };
};

export const editCocktail = ({ id, updates }: EditCocktailAction) => {
  return {
    type: CocktailActionType.EDIT,
    id,
    updates,
  };
};

export const deleteCocktail = (id: string) => {
  return {
    type: CocktailActionType.DELETE,
    id,
  };
};

export const addIngredient = (newIngredient: IngredientType) => {
  return {
    type: CocktailActionType.NEW_ING,
    payload: newIngredient,
  };
};

export const deleteIngredient = (id: string, ingredient_id: string) => {
  return {
    type: CocktailActionType.DELETE_ING,
    id,
    ingredient_id,
  };
};
