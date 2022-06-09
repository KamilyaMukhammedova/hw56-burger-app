import meatImage from './assets/Meat.png';
import cheeseImage from './assets/Cheese.png';
import saladImage from './assets/Salad.png';
import baconImage from './assets/Bacon.png';
import {useState} from "react";

const INGREDIENTS = [
  {name: 'Meat', price: 50, image: meatImage},
  {name: 'Cheese', price: 20, image: cheeseImage},
  {name: 'Salad', price: 5, image: saladImage},
  {name: 'Bacon', price: 30, image: baconImage},
];

const App = () => {
  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0},
  ]);

  return (
    <></>
  );
}

export default App;
