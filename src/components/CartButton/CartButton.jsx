import React, { useContext } from 'react';
import {BsCart} from 'react-icons/bs';
import './CartButton.css';
import AppContext from '../context/AppContext';

function Cart__button() {

  const {cartItens, isCartVisible, setCartVisible} = useContext(AppContext);


  return (
    <button 
      type='button' 
      className='cart__button'
      onClick={ () => setCartVisible(!isCartVisible)}
    >
      <BsCart/>
      { cartItens.length > 0 &&  <span className='cart__status'>{cartItens.length}</span>}
    </button>
  );
}

export default Cart__button;