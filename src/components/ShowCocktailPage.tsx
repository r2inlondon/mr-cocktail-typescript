import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Link } from "react-router-dom";
import { cocktailRootState } from "../state/reducers/stateTypes";
import { CocktailType } from "../state/reducers/cocktails/cocktailTypes";
import { deleteCocktail } from "../state/actions-creators/cocktailActions";

type PropsType = {
  cocktails: CocktailType[];
  dispatch: Dispatch;
};

const ShowCocktailPage = ({ cocktails, dispatch }: PropsType) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [theCocktail, setTheCocktail] = useState<CocktailType>({
    id: "",
    name: "",
  });

  useEffect(() => {
    const cocktailFound = cocktails.find((item) => item.id === id);

    if (cocktailFound) setTheCocktail(cocktailFound);

    if (!cocktailFound) navigate("/");
  }, [cocktails, id, navigate]);

  const handleDelete = () => {
    if (!id) return console.log("error");

    dispatch(deleteCocktail(id));
    navigate("/");
  };

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2>{theCocktail.name}</h2>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "space-between",
          width: "45%",
        }}
      >
        <Link to={`/edit/${theCocktail.id}`}>
          <p>Edit</p>
        </Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: cocktailRootState) => ({
  cocktails: state.cocktailReducer,
});

export default connect(mapStateToProps)(ShowCocktailPage);
