import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { cocktailRootState } from "../state/reducers/stateTypes";
import { CocktailType } from "../state/reducers/cocktails/cocktailTypes";
import CocktailForm from "./CocktailForm";
import { editCocktail } from "../state/actions-creators/cocktailActions";

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
  });

  const handleAddCocktail = ({ id, name }: CocktailType) => {
    dispatch(editCocktail({ id, updates: name }));
    navigate("/");
  };

  useEffect(() => {
    const found = cocktails.find((item) => item.id === id);

    if (found) setCocktailToEdit(found);
  }, [cocktails, id]);

  return (
    <CocktailForm
      handleAddCocktail={handleAddCocktail}
      cocktailToEdit={cocktailToEdit}
    />
  );
};

const mapStateToProps = (state: cocktailRootState) => ({
  cocktails: state.cocktailReducer,
});

export default connect(mapStateToProps)(EditCocktailPage);
