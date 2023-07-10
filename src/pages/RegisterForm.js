import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert';
const RegistrationForm = () => {
  const navigate = useNavigate();
  const [registrationFormData, setRegistrationFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });

  const { username, email, password, confirmPassword, gender } = registrationFormData;

  const handleRegistrationFormChange = (e) => {
    setRegistrationFormData({ ...registrationFormData, [e.target.name]: e.target.value });
  };

  const handleRegistrationFormSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(registrationFormData);
      const response = await fetch('/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationFormData),
      });
      const data = await response.json();
      if (response.status == 200) {
        navigate('/sign-in');
      }
      else if (response.status == 400) {
        console.log(response)
        Swal("Error", data.errors[0].msg, "error");
      }
      else if(response.status ==401){
        Swal("Error", data.message, "error");
      }

      else {

        Swal("Error", data.message, "error");
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-header">
              <h3 className="text-center">Register</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleRegistrationFormSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    id="username"
                    placeholder="Enter username"
                    value={username}
                    onChange={handleRegistrationFormChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={handleRegistrationFormChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={handleRegistrationFormChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={handleRegistrationFormChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="gender" className="form-label">
                    Gender
                  </label>
                  <select
                    className="form-control"
                    name="gender"
                    id="gender"
                    value={gender}
                    onChange={handleRegistrationFormChange}
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;