import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { cocktailRootState } from "../state/reducers/stateTypes";
import { CocktailType } from "../state/reducers/cocktails/cocktailTypes";
// import CocktailForm from "./CocktailForm";
import { startEditCocktail } from "../state/actions-creators/cocktailActions";
import CocktailForm from "./CocktailForm";

type PropsType = {
  cocktails: CocktailType[];
  dispatch: Dispatch;
};

const EditCocktailPage = ({ cocktails, dispatch }: PropsType) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [cocktailToEdit, setCocktailToEdit] = useState<CocktailType>({
    id: "",
    name: "",
    ingredients: [],
  });

  useEffect(() => {
    const found = cocktails.find((item) => item.id === id);

    if (found) setCocktailToEdit(found);
  }, [cocktails, id]);

  const handleEditCocktail = (updates: string) => {
    if (!id) return console.log("id error");

    dispatch(startEditCocktail(id, updates));
    navigate("/");
  };

  return (
    <CocktailForm
      label="cocktail"
      handleItem={handleEditCocktail}
      cocktailToEdit={cocktailToEdit.name}
    />
  );
};

const mapStateToProps = (state: cocktailRootState) => ({
  cocktails: state.cocktailReducer,
});

export default connect(mapStateToProps)(EditCocktailPage);
