import React from 'react';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Provider from './components/context/Provider';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Provider>
      <Header />
      <Products />
      <Cart/>
    </Provider>
  );
}

export default App;
