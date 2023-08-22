import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { cocktailRootState } from "../state/reducers/stateTypes";
import { CocktailType } from "../state/reducers/cocktails/cocktailTypes";

type PropsType = {
  cocktails: CocktailType[];
};

const ShowCocktailPage = ({ cocktails }: PropsType) => {
  const { id } = useParams();
  const [theCocktail, setTheCocktail] = useState<CocktailType>({
    id: "",
    name: "",
  });

  useEffect(() => {
    const found = cocktails.find((item) => item.id === id);

    if (found) setTheCocktail(found);
  }, [cocktails, id]);

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2>{theCocktail.name}</h2>
      <Link to={`/edit/${theCocktail.id}`}>
        <p>Edit</p>
      </Link>
    </div>
  );
};

const mapStateToProps = (state: cocktailRootState) => ({
  cocktails: state.cocktailReducer,
});

export default connect(mapStateToProps)(ShowCocktailPage);
