import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { cocktailRootState } from "../state/reducers/stateTypes";
import { CocktailType } from "../state/reducers/cocktails/cocktailTypes";

type PropsType = {
  cocktails: CocktailType[];
};

const ViewCocktail = ({ cocktails }: PropsType) => {
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
    <div style={{ textAlign: "center" }}>
      <h2>{theCocktail.name}</h2>
    </div>
  );
};

const mapStateToProps = (state: cocktailRootState) => ({
  cocktails: state.cocktailReducer,
});

export default connect(mapStateToProps)(ViewCocktail);
