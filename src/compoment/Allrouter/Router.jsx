import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import BookList from '../BookList'
import BookForm from '../BookForm'
import BookDetails from '../../pages/BookDetails'

const Router = () => {
  const [books, setBooks] = useState([
    { id: 1, title: '1984', author: 'George Orwell', genre: 'Fiction', date: '1949-06-08', isBorrowed: false },
    // Add more sample books here
  ]);
  
  
  return (
    <div>
     <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<BookList books={books} />} />
          <Route path="/add" element={<BookForm onSubmit={handleAddBook} />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </div>
    </div>
    </div>
  )
}

export default Router