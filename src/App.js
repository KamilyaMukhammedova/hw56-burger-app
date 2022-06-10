import {useState} from "react";
import {nanoid} from "nanoid";
import meatImage from './assets/Meat.png';
import cheeseImage from './assets/Cheese.png';
import saladImage from './assets/Salad.png';
import baconImage from './assets/Bacon.png';
import Ingredients from "./components/Ingredients/Ingredients";
import Burger from "./components/Burger/Burger";
import Filling from "./components/Filling/Filling";
import Price from "./components/Price/Price";

const INGREDIENTS = [
  {name: 'Meat', price: 50, image: meatImage},
  {name: 'Cheese', price: 20, image: cheeseImage},
  {name: 'Salad', price: 5, image: saladImage},
  {name: 'Bacon', price: 30, image: baconImage},
];

const App = () => {
  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0, id: nanoid()},
    {name: 'Cheese', count: 0, id: nanoid()},
    {name: 'Salad', count: 0, id: nanoid()},
    {name: 'Bacon', count: 0, id: nanoid()},
  ]);

  const [price, setPrice] = useState(20);

  const addIngredient = ingId => {
    const ingredientsCopy = ingredients.map((ing, index) => {
      if(ing.id === ingId) {
        setPrice(prev => prev + INGREDIENTS[index].price);
        return {
          ...ing,
          count: ing.count + 1,
        }
      }
      return ing;
    });
    setIngredients(ingredientsCopy);
  };

  const removeIngredient = ingId => {
    const ingredientsCopy = ingredients.map((ing, index) => {
      if(ing.id === ingId) {
        setPrice(prev => prev - INGREDIENTS[index].price);
        return {
          ...ing,
          count: ing.count - 1,
        }
      }
      return ing;
    });
    setIngredients(ingredientsCopy);
  };

  const removeAllIngredients = ingId => {
    const ingredientsCopy = ingredients.map((ing, index) => {
      if(ing.id === ingId) {
        setPrice(prev => prev - (INGREDIENTS[index].price * ing.count));
        return {
          ...ing,
          count: 0,
        }
      }
      return ing;
    });
    setIngredients(ingredientsCopy);
  };

  const getFilling = () => {
    const fillingArray = [];
    for(let i = 0; i < ingredients.length; i++) {
      for(let j = 0; j < ingredients[i].count; j++) {
        fillingArray.push(ingredients[i].name);
      }
    }
    return fillingArray;
  };

  const getFillingComponent = () => {
    return getFilling().map((filling, index) => {
      return <Filling key={index} className={filling}/>;
    });
  };

  const ingredientsComponent =
    <Ingredients
      ingredients={ingredients}
      ing={INGREDIENTS}
      addIng={addIngredient}
      removeIng={removeIngredient}
      removeAllIng={removeAllIngredients}
    />;

  const priceComponent = <Price price={price}/>;
  const burgerComponent = <Burger children={getFillingComponent()}/>;

  return (
    <div className="Container">
      <div className="Container-inner">
        <h2>Ingredients</h2>
        {ingredientsComponent}
      </div>
      <div className="Container-inner">
        <h2>Burger</h2>
        {burgerComponent}
        {priceComponent}
      </div>
    </div>
  );
};

export default App;
