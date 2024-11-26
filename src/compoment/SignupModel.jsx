import React, { useState } from 'react';

const SignUpModal = ({ onClose, onSignUp }) => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your form validation logic or make an API call to register the user
    onSignUp(); // Simulate a successful sign-up and close the modal
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded shadow-lg w-11/12 sm:w-1/3 lg:w-1/4">
      <h2 className="text-xl font-bold mb-4 text-center">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input 
            type="text" 
            name="username" 
            placeholder="Username" 
            value={formData.username}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full sm:w-auto">Sign Up</button>
          <button type="button" onClick={onClose} className="bg-red-600 text-white px-4 py-2 rounded w-full sm:w-auto">Close</button>
        </div>
      </form>
    </div>
  </div>
  
  );
};

export default SignUpModal;
