import React, { useState, useEffect } from 'react';
import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductsCard from '../ProductsCard/ProductsCard';
import SearchBar from '../Search/SearchBar';

function Products() {
  const [products, setProducts] = useState([]);

  const handleSearch = async (query) => {
    try {
      const results = await fetchProducts(query);
      setProducts(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response);
    });
  }, []);

  console.log(products);

  return (
    <div className='products-container'>
      <SearchBar onSearch={handleSearch} />
      <section className='products'>
        {products.map((product) => (
          <ProductsCard key={product.id} data={product} />
        ))}
      </section>
    </div>
  );
}

export default Products;
