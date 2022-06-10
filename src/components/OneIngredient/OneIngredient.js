import React from 'react';
import './OneIngredient.css';

const OneIngredient = (props) => {
  return (
    <div className="IngredientDiv">
      <button onClick={props.addIng} style={{border: 'none'}}>
        <img src={props.image} alt={props.name} className="IngImg"/>
      </button>
      <p>{props.name}</p>
      <p>x{props.count}</p>
      <button
        type="button"
        onClick={props.removeIng}
        style={props.count === 0 ? {display: 'none'} : {display: 'inline-block'}}
      >
        Remove one
      </button>
    </div>
  );
};

export default OneIngredient;