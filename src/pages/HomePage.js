import React from 'react'
import './HomePage.css'
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
         
            {/* Image Section */}
            <section className="image-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1>Welcome to My Website</h1>
                            <p>Discover amazing products and services.</p>
                            <a href="#" className="btn btn-primary">
                                Learn More
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <img src="https://cdn.pixabay.com/photo/2020/02/02/03/43/young-4811941_1280.png" alt="Image" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            {/* Features Section */}
            <section className="features-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="feature-item">
                                <i class="fa fa-cogs" aria-hidden="true"></i>
                                <h3 className="feature-title">Easy to Use</h3>
                                <p className="feature-description">
                                    Our platform is designed with user-friendliness in mind, making it easy for you to navigate and find what
                                    you need.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="feature-item">
                                <i class="fa fa-shopping-cart"></i>
                                <h3 className="feature-title">Shop Online</h3>
                                <p className="feature-description">
                                    Browse a wide range of products in various categories and make secure purchases online with just a few
                                    clicks.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="feature-item">
                                <i class="fa fa-headphones" aria-hidden="true"></i>
                                <h3 className="feature-title">24/7 Support</h3>
                                <p className="feature-description">
                                    Our dedicated support team is available round-the-clock to assist you with any inquiries or issues you
                                    may have.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <h2 className="section-title">What Our Customers Say</h2>
                            <div className="testimonial">
                                <i class="fa fa-quote-left" aria-hidden="true"></i>
                                <p className="testimonial-text">
                                    "Great products and excellent service! I highly recommend this website to anyone looking for quality
                                    items."
                                </p>
                                <div className="testimonial-author">- John Doe</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
                        </div>
                        <div className="col-lg-6">
                            <ul className="footer-links">
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">Terms of Service</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default HomePage