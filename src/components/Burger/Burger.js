import React from 'react';
import './Burger.css';

const Burger = (props) => {
  return (
    <div className="Burger">
      <div className="BreadTop">
        <div className="Seeds1"> </div>
        <div className="Seeds2"> </div>
      </div>
      {props.children}
      <div className="BreadBottom"> </div>
    </div>
  );
};

export default Burger;