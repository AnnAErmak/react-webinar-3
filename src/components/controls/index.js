import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import BasketInfo from "../basket-info";

function Controls({ onAdd = ()=>{}, sum, amount }) {
  return (
    <div className="Controls">
      <BasketInfo sum={sum} amount={amount}/>
      <button onClick={() => onAdd()}>Перейти</button>
    </div>
  );
}

Controls.propTypes = {
  onAdd: PropTypes.func,
};

export default React.memo(Controls);
