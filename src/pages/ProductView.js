import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductView = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchProductData();
    console.log(product);
  }, []);

  const fetchProductData = async () => {
    try {
      const response = await fetch(`/products/get/${productId}`,{
      });
      const data = await response.json();

      setProduct(data);

    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };


  return (

    <div className="container mt-4">
    <h1 className="mb-4">Product Details</h1>
    <div className="card custom-card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <h5 className="card-title">Product Information</h5>
            <div>
              <strong>Name:</strong> {product.name}
            </div>
            <div>
              <strong>Price:</strong> {product.price}
            </div>
            <div>
              <strong>Stock Qty:</strong> {product.stockQty}
            </div>
            <div>
              <strong>Stock Consumed:</strong> {product.stockConsumed}
            </div>
          </div>
          <div className="col-md-6">
            <h5 className="card-title">Manufacturer Information</h5>
            <div>
              <strong>Manufacturer Name:</strong>{product.productDetails?.mfgName || 'null'}
            </div>
            <div>
              <strong>Manufacturer Address:</strong> {product.productDetails?.mfgAddress || 'null'}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ProductView;