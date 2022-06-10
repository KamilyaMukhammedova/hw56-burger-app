import meatImage from './assets/Meat.png';
import cheeseImage from './assets/Cheese.png';
import saladImage from './assets/Salad.png';
import baconImage from './assets/Bacon.png';
import {useState} from "react";
import {nanoid} from "nanoid";
import Ingredients from "./components/Ingredients/Ingredients";
import Burger from "./components/Burger/Burger";
import Filling from "./components/Filling/Filling";

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

  const addIngredient = ingId => {
    const ingredientsCopy = ingredients.map(ing => {
      if(ing.id === ingId) {
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
    const ingredientsCopy = ingredients.map(ing => {
      if(ing.id === ingId) {
        return {
          ...ing,
          count: ing.count - 1,
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

  const ingredientsComponent =
    <Ingredients
      ingredients={ingredients}
      ing={INGREDIENTS}
      addIng={addIngredient}
      removeIng={removeIngredient}
    />;

  const getFillingComponent = () => {
    return getFilling().map((filling, index) => {
      return <Filling key={index} className={filling}/>;
    });
  };

  const burgerComponent = <Burger children={getFillingComponent()}/>;

  return (
    <div className="Container">
      <div className="Container-inner">
        <h2 className="Title">Ingredients</h2>
        {ingredientsComponent}
      </div>
      <div className="Container-inner">
        <h2 className="Title">Burger</h2>
        {burgerComponent}
      </div>
    </div>
  );
};

export default App;
