import React from 'react';
import './OneIngredient.css';

const OneIngredient = (props) => {
  return (
    <div className="IngredientDiv">
      <button onClick={props.addIng} style={{border: 'none', width: '20%'}}>
        <img src={props.image} alt={props.name} className="IngImg"/>
      </button>
      <p style={{width: '25%'}}>{props.name}</p>
      <p style={{width: '10%', fontSize: '10px'}}>{props.price} KGS</p>
      <p style={{width: '25%'}}>x{props.count}</p>
      <button
        type="button"
        className="BtnRemove"
        onClick={props.removeIng}
        style={props.count !== 0 ? {backgroundColor: '#96c962'} : {backgroundColor: 'inherit'}}
        disabled={props.count === 0}
      >
        -
      </button>
      <button
        type="button"
        className="BtnRemove"
        onClick={props.removeAllIng}
        style={props.count !== 0 ? {backgroundColor: 'green'} : {backgroundColor: 'inherit'}}
        disabled={props.count === 0}
      >
        Remove all
      </button>
    </div>
  );
};

export default OneIngredient;