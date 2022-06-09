import React from 'react';
import OneIngredient from "../OneIngredient/OneIngredient";

const Ingredients = (props) => {
  return props.ingredients.map((ingredient, index) => {
    return <OneIngredient
      key={ingredient.id}
      image={ingredient.image}
      name={ingredient.name}
      count={props.ing[index].count}
    />
  });
};

export default Ingredients;