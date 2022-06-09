import meatImage from './assets/Meat.png';
import cheeseImage from './assets/Cheese.png';
import saladImage from './assets/Salad.png';
import baconImage from './assets/Bacon.png';
import {useState} from "react";
import './BurgerView.css';
import {nanoid} from "nanoid";
import Ingredients from "./components/Ingredients/Ingredients";

const INGREDIENTS = [
  {name: 'Meat', price: 50, image: meatImage, id: nanoid()},
  {name: 'Cheese', price: 20, image: cheeseImage, id: nanoid()},
  {name: 'Salad', price: 5, image: saladImage, id: nanoid()},
  {name: 'Bacon', price: 30, image: baconImage, id: nanoid()},
];

const App = () => {
  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0},
  ]);

  const ingredientsComponent = <Ingredients ingredients={INGREDIENTS} ing={ingredients}/>;

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
