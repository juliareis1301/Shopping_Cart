import React from 'react';
import {BsCart} from 'react-icons/bs';
import './CartButton.css';

function Cart__button() {
  return (
    <button type='button' className='cart__button'>
      <BsCart></BsCart>
      <span className='cart__status'>1</span>
    </button>
  );
}

export default Cart__button;