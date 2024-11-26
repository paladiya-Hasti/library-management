import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignUpModal from './SignupModel';
import logo1 from '../assest/img/logo1.webp'

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    setIsModalOpen(true); 
  };

  return (
    <div>
    <header className="bg-blue-600 text-white py-4 px-6 flex items-center justify-between">
      {/* Logo */}
      <img src={logo1} alt="Logo" className="h-8" />
  
      {/* Navigation */}
      <nav className="flex items-center space-x-4">
        {/* Search input */}
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 hidden sm:block"
        />
  
        {/* Navigation Links */}
        <div className="hidden sm:flex space-x-4">
          <Link to="/" className="px-4 text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/add" className="px-4 text-white hover:text-gray-300">
            Add Book
          </Link>
          <button
            onClick={handleSignUpClick}
            className="px-4 text-white hover:text-gray-300"
          >
            Sign Up
          </button>
        </div>
  
        {/* Hamburger menu for mobile */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-white">
            <i className="fas fa-bars"></i> {/* Use an icon library like FontAwesome */}
          </button>
        </div>
      </nav>
    </header>
  
    {isModalOpen && (
      <SignUpModal
        onClose={() => setIsModalOpen(false)}
        onSignUp={() => {
          setIsModalOpen(false);
          navigate('/');
          alert('Signup successful');
        }}
      />
    )}
  </div>
  
  );
};

export default Header;
