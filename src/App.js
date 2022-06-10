import meatImage from './assets/Meat.png';
import cheeseImage from './assets/Cheese.png';
import saladImage from './assets/Salad.png';
import baconImage from './assets/Bacon.png';
import {useState} from "react";
import './BurgerView.css';
import {nanoid} from "nanoid";
import Ingredients from "./components/Ingredients/Ingredients";

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

  const ingredientsComponent = <Ingredients ingredients={ingredients} ing={INGREDIENTS} addIng={addIngredient}/>;

  return (
    <div className="Container">
      <div className="Container-inner">
        <h2 className="Title">Ingredients</h2>
        {ingredientsComponent}
      </div>
      <div className="Container-inner">
        <p>hhhhh</p>
      </div>
    </div>
  );
}

export default App;
