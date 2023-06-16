import React, { useContext } from 'react';
import './ProductsCard.css';
import propTypes from 'prop-types';
import { BsFillCartPlusFill } from 'react-icons/bs';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../context/AppContext';

function ProductsCard({ data }) {
  const { title, thumbnail, price } = data;
  const { cartItens, setCartItens } = useContext(AppContext);


  const handleAddCart = () => setCartItens([ ...cartItens, data]);


  return (
    <section className='product-card'>
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt='product'
        className='card__image' />

      <div className='card__infos'>
        <h2 className='card__price'>{formatCurrency(price, 'BRL')}</h2>
        <h2 className='card__title'>{title}</h2>
      </div>

      <button 
        type='button' 
        className='button__add__cart'
        onClick={handleAddCart}>
        <BsFillCartPlusFill />
      </button>
    </section>
  );
}

export default ProductsCard;

ProductsCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;