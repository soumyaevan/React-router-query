import Wrapper from "../assets/wrappers/CocktailList";
import CocktailCard from "./CocktailCard";
const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return <h4 style={{ textAlign: "center" }}>No matching drinks found</h4>;
  }
  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strAlcoholic, strDrink, strDrinkThumb, strGlass } = item;
    return {
      id: idDrink,
      info: strAlcoholic,
      name: strDrink,
      image: strDrinkThumb,
      glass: strGlass,
    };
  });
  return (
    <Wrapper>
      {formattedDrinks.map((drink) => {
        return <CocktailCard key={drink.id} {...drink} />;
      })}
    </Wrapper>
  );
};
export default CocktailList;
