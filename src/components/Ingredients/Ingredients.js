import React from 'react';
import OneIngredient from "../OneIngredient/OneIngredient";

const Ingredients = (props) => {
  return props.ingredients.map((ingredient, index) => {
    return <OneIngredient
      key={ingredient.id}
      image={props.ing[index].image}
      price={props.ing[index].price}
      addIng={() => props.addIng(ingredient.id)}
      name={props.ing[index].name}
      count={ingredient.count}
      removeIng={() => props.removeIng(ingredient.id)}
      removeAllIng={() => props.removeAllIng(ingredient.id)}
    />
  });
};

export default Ingredients;