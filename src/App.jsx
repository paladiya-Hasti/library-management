import React, { useState } from 'react';
import './App.css';

import Header from './compoment/Header';

import Footer from './compoment/Footer';
import BookList from './compoment/BookList';
// import BookDetails from './pages/BookDetails';

const App = () => {
  const [books, setBooks] = useState([]);

  

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      
      <div className="max-w-4xl mx-auto p-6">
        {/* <BookForm onSubmit={handleAddBook} /> */}
      </div>
      
      <div className="max-w-6xl mx-auto p-6">
        <BookList books={books} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
