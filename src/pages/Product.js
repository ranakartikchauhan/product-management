import React, { useEffect, useState } from 'react'
import ProductTable from './ProductTable';

function Product() {
  
      const [products, setProducts] = useState([]);
    
      useEffect(() => {
        fetchProductData();
      }, []);
    
      const fetchProductData = async () => {
        try {
          const response = await fetch('/products',{
          });
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error('Error fetching product data:', error);
        }
      };
      
  return (
    <div>
        <h2 className='text-center'>Product Page</h2>
        <ProductTable products={products} fetchProductData={fetchProductData} />
    </div>
  )
}

export default Product