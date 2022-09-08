import React, { useState, useEffect } from 'react';
import { requestData } from '../service/requests';
import AppContext from './AppContext';

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([])
  const [detailedProduct, setDetailedProduct] = useState([])
  useEffect(() => {
      requestData('/produtos')
        .then((response) => {
          setProducts(response)
          setDetailedProduct(response[0])
      } )
  },[])
  const contextValue = {
    products,
    setProducts,
    detailedProduct,
    setDetailedProduct,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default ProductsProvider;