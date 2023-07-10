import React, { useState, } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert';
const SignInPage = () => {
  const navigate = useNavigate();


  const [signInFormData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = signInFormData;

  const signInFormChange = (e) => {
    console.log(e.target.name);
    setFormData({ ...signInFormData, [e.target.name]: e.target.value });
  };

  const signInFormSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(signInFormData);
      const response = await fetch('auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signInFormData),
      });
      const data = await response.json();
      if (response.status == 200) {
        sessionStorage.setItem('isLoggedIn', 'true');
        navigate('/product');
      }
      else {
        Swal("Error", data.message, "error");
      }

    } catch (error) {
      Swal("Error", error, "error");
      console.error('Error creating product:', error);
    }
  }
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-header">
              <h3 className="text-center">Sign In</h3>
            </div>
            <div className="card-body">
              <form onSubmit={signInFormSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input type="email" className="form-control" name='email' id="email" placeholder="Enter email" value={email} onChange={signInFormChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control" id="password" placeholder="Enter password" name='password' value={password} onChange={signInFormChange} />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">Sign In</button>
                </div>
              </form>
            <p className='my-3'>Not registered click <Link to='/register'>here</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
