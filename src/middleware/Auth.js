import React, { Component, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Auth(props) {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');

    if (isLoggedIn == "false") {
      navigate('/sign-in');
    }
  }, [navigate]);
  return (
    <>
      <Component />
    </>
  )
}

export default Auth