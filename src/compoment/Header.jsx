import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignUpModal from './SignupModel';
import logo1 from '../assest/img/logo1.webp'

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(true); // State to control the modal visibility
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    setIsModalOpen(true); // Open the sign-up modal when Sign Up is clicked
  };

  return (
    <div>
      <header className="bg-blue-600 text-white py-4 px-6 flex justify-between">
        <img src={logo1} alt="" />
        
        <nav className='p-3'>
          <input type="text" placeholder="Search" className="px-4 p-1" />
          <Link to="/" className="px-4">Home</Link>
          <Link to="/add" className="px-4">Add Book</Link>
          <button onClick={handleSignUpClick} className="px-4">Sign Up</button>
        </nav>
      </header>

      {/* Conditional rendering of SignUpModal */}
      {isModalOpen && <SignUpModal onClose={() => setIsModalOpen(true)} onSignUp={() => { 
        setIsModalOpen(false);
        navigate('/');
        alert("signup succefull") // Navigate to Home page after successful sign-up
      }} />}
    </div>
  );
};

export default Header;
