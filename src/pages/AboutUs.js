import React from 'react';
import './AboutUs.css';
const AboutUsPage = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <div className="about-us-content">
        <img
          src="https://cdn.pixabay.com/photo/2017/02/20/04/22/real-estate-2081571_1280.png"
          alt="Company Logo"
          className="company-logo"
        />
        <h2>Hello, I'm Kartik</h2>
        <p>
          We are a team of talented MERN (MongoDB, Express.js, React.js, Node.js) developers dedicated to delivering high-quality web applications. With our expertise in the MERN stack, we create modern and scalable solutions tailored to meet our clients' needs.
        </p>
        <p>
          Our skills include building responsive and user-friendly front-end interfaces using React.js, designing efficient back-end APIs with Express.js and Node.js, and working with MongoDB to handle data storage and retrieval.
        </p>
        <p>
          We are passionate about crafting elegant and robust web applications that provide an exceptional user experience. Our goal is to utilize the power of the MERN stack to create innovative solutions that solve complex business challenges.
        </p>
        <p>
          If you are looking for a dedicated and skilled MERN development team, we are here to help. Contact us today to discuss your project requirements and let us bring your ideas to life.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
