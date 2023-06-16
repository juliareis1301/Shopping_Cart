import React, { useState, useContext } from 'react';
import { BiSearch } from 'react-icons/bi';
import './SearchBar.css';
import PropTypes from 'prop-types';
import fetchProduts from '../../api/fetchProducts';
import AppContext from '../context/AppContext';

function SearchBar() {
  const { setProducts, setLoading } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState('');
  
  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);

    const products = await fetchProduts(searchValue);
    setProducts(products);
    setLoading(false);
    setSearchValue('');
  };

  return (
    <form className='search__bar'onSubmit={handleSearch}>{name}
      <input
        type='search'
        value={searchValue}
        placeholder='Buscar produtos'
        className='search__input'
        onChange={({ target }) => setSearchValue(target.value)}
        required
      />
      <button type='submit' className='search__button'>
        <BiSearch />
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};


export default SearchBar;
