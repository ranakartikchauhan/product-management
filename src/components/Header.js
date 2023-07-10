import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const response = await fetch('auth/logout', {
                method: 'POST',
                credentials: 'include', // Include cookies in the request
            });

            if (response.ok) {
                sessionStorage.setItem('isLoggedIn', 'false');
                setIsLoggedIn(false);
                navigate('sign-in');

            } else {
                console.error('Logout failed');
                // Handle logout failure case
            }
        } catch (error) {
            console.error('Error logging out:', error);
            // Handle error case
        }
    };

    useEffect(() => {
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        if (isLoggedIn == "true") {
            setIsLoggedIn(true);
        }
    }, [navigate]);

    return (
        <div>
            {/* Navigation Bar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    <img src="https://img.icons8.com/?size=512&id=3CeVOxYg5BH6&format=png" alt="Logo" className="logo-image" />
                    My Website
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/product" className="nav-link">
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/about-us" className="nav-link">
                                About Us
                            </Link>
                        </li>
                    </ul>

                </div>
                <ul className="nav justify-content-end mx-4">
                    {isLoggedIn ? (
                        <li className="nav-item btn btn-success" onClick={handleLogout}>
                            Log Out
                        </li>) :
                        (
                            <li>
                                <Link className='nav-item btn btn-success' to="/sign-in">Sign In</Link>
                            </li>)
                    }

                </ul>
            </nav>
        </div>
    )
}

export default Header