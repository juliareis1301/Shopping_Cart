import React from 'react';
import SearchBar from '../Search/SearchBar';
import './Header.css';
import CartButton from '../CartButton/CartButton';

function Header() {

  return (
    <header className='header'>
      <div className='container'>
        <SearchBar />
        <CartButton />
      </div>
    </header>
  );
}

export default Header;
