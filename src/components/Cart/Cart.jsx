import React, { useContext } from  'react';
import './Cart.css';
import AppContext from '../context/AppContext';
import CartItem from '../CartItem/CartItem';
import formatCurrency from '../../utils/formatCurrency';
 

function Cart () {
  const { cartItens, isCartVisible } = useContext(AppContext);
 
  const totalPrice = cartItens.reduce((acc, item) => item.price + acc,0);
  return(
    <section className={`cart ${isCartVisible ? 'cart--active': ''}`}>
      <div className='cart-itens'>
        { cartItens.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} /> )}
      </div>
      <div className='cart-resume'>{formatCurrency(totalPrice, 'BRL')}</div>
    </section>
  );
}

export default Cart;