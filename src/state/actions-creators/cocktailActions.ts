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
        // newCocktail.ingredients = [];
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

export const startDeleteCocktail = (id: string) => {
  return (dispatch: Dispatch) => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        dispatch(deleteCocktail(id));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
};

const deleteCocktail = (id: string) => {
  return {
    type: CocktailActionType.DELETE,
    id,
  };
};

export const startEditCocktail = (id: string, name: string) => {
  return (dispatch: Dispatch) => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    })
      .then((response) => response.json())
      .then(() => {
        dispatch(editCocktail({ id, name }));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
};

const editCocktail = ({ id, name }: EditCocktailAction) => {
  return {
    type: CocktailActionType.EDIT,
    id,
    name,
  };
};

export const startAddIngredient = (ingredient: IngredientType) => {
  return (dispatch: Dispatch) => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/${
        ingredient.cocktail_id
      }/ingredients`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ingredient),
      }
    )
      .then((response) => response.json())
      .then((response) => {
        const newIngredient = response.data;
        newIngredient.id = newIngredient.id.toString();
        newIngredient.cocktail_id = newIngredient.cocktail_id.toString();
        dispatch(addIngredient(newIngredient));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
};

const addIngredient = (newIngredient: IngredientType) => {
  return {
    type: CocktailActionType.NEW_ING,
    payload: newIngredient,
  };
};

export const deleteIngredient = (id: string, ingredient_id: number) => {
  return {
    type: CocktailActionType.DELETE_ING,
    id,
    ingredient_id,
  };
};
