import React from 'react';
import './OneIngredient.css';

const OneIngredient = (props) => {
  return (
    <div className="IngredientDiv">
      <button><img src={props.image} alt={props.name} className="IngImg"/></button>
      <p>{props.name}</p>
      <p>x{props.count}</p>
      <button type="button">Remove one</button>
    </div>
  );
};

export default OneIngredient;