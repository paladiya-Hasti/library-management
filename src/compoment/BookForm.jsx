import React, { useState } from 'react';

const BookForm = ({ initialData = {}, onSubmit }) => {
  const [form, setForm] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="p-6 sm:p-8">
    <form
      onSubmit={handleSubmit}
      className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-md"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Add/Edit Book</h2>
      
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
          Title
        </label>
        <input
          type="text"
          name="title"
          value={form.title || ''}
          onChange={handleChange}
          placeholder="Enter book title"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
          Author
        </label>
        <input
          type="text"
          name="author"
          value={form.author || ''}
          onChange={handleChange}
          placeholder="Enter author name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
  
      <div className="mb-4">
        <label htmlFor="genre" className="block text-sm font-medium text-gray-700 mb-1">
          Genre
        </label>
        <select
          name="genre"
          value={form.genre || ''}
          onChange={handleChange}
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-Fiction</option>
        </select>
      </div>
  
      <div className="mb-4">
        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
          Publication Date
        </label>
        <input
          type="date"
          name="date"
          value={form.date || ''}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
  
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Save
      </button>
    </form>
  </div>
  
  );
};

export default BookForm;
