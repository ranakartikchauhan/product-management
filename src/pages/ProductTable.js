import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert';


const ProductTable = ({ products, fetchProductData }) => {
  const [id, setId] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    stockQty: '',
    stockConsumed: '',
    mfgName: '',
    mfgAddress: '',
  });
  const [isCreating, setIsCreating] = useState(false); // State for create mode

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const { name, price, stockQty, stockConsumed, mfgName, mfgAddress } = formData;

  const handleUpdateId = (id) => {
    handleShow();
    setId(id);
    setIsCreating(false); // Switch to update mode
  };

  const handleCreateMode = () => {
    handleShow();
    setFormData({
      name: '',
      price: '',
      stockQty: '',
      stockConsumed: '',
      mfgName: '',
      mfgAddress: '',
    });
    setIsCreating(true); // Switch to create mode
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isCreating) {
      // Create mode logic
      
      try {
        const response = await fetch('/products/create', {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        console.log(data);
        Swal("Success", "Product created successfully", "success");
        fetchProductData();
        handleClose();
      } catch (error) {
        console.error('Error creating product:', error);
      }
    } else {
      // Update mode logic
      formData.productId = id;
      console.log(formData);

      try {
        const response = await fetch(`/products/update/${formData.productId}`, {
          method: 'PUT',
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        console.log(data);
        Swal("Success", "Product updated successfully", "success");
        fetchProductData();
        handleClose();
      } catch (error) {
        console.error('Error updating product:', error);
      }
    }
  };

  const handleDelete = async (productId) => {
    try {
      const response = await fetch(`/products/delete/${productId}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      console.log(data);
      Swal("Success", "Product deleted successfully", "success");
      fetchProductData();
      handleClose();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };


  return (
    <div>
      <div className='row'>
        <div className='col-4'>
          <button className='btn btn-success m-4' onClick={handleCreateMode}>
            Add Product
          </button>
        </div>
      </div>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr className='text-center'>
            <th>Name</th>
            <th>Price</th>
            <th>Stock Qty</th>
            <th>Stock Consumed</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr className='text-center' key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.stockQty}</td>
              <td>{product.stockConsumed}</td>
              <td>
                <button onClick={() => handleUpdateId(product._id)} className="btn btn-primary btn-sm mr-2 m-2">
                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </button>
                <button className="btn btn-danger btn-sm mr-2 m-2" onClick={() => handleDelete(product._id)}>
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
                <Link to={`/product/view/${product._id}`} className="btn btn-info btn-sm m-2">
                  <i class="fa fa-eye" aria-hidden="true"></i>
                </Link>

              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>


        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                value={price}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="stockQty" className="form-label">
                Stock Quantity
              </label>
              <input
                type="number"
                className="form-control"
                id="stockQty"
                name="stockQty"
                value={stockQty}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="stockConsumed" className="form-label">
                Stock Consumed
              </label>
              <input
                type="number"
                className="form-control"
                id="stockConsumed"
                name="stockConsumed"
                value={stockConsumed}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mfgName" className="form-label">
                Manufacturer Name
              </label>
              <input
                type="text"
                className="form-control"
                id="mfgName"
                name="mfgName"
                value={mfgName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mfgAddress" className="form-label">
                Manufacturer Address
              </label>
              <input
                type="text"
                className="form-control"
                id="mfgAddress"
                name="mfgAddress"
                value={mfgAddress}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              {isCreating ? 'Create' : 'Update'}
            </button>

          </form>
        </Modal.Body>



      </Modal>
    </div>
  );
};

export default ProductTable;