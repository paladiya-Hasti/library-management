import React, { useState } from "react";

const eBooks = [
  {
    title: "The Mystery of Time",
    author: "Jane Doe",
    genre: "Mystery",
    publicationDate: "2020-01-12",
    summary: "A thrilling tale that takes you through time and mysteries unsolved.",
    cover: "https://avatars.mds.yandex.net/i?id=cb9e60a7cfe6a34394dcae922f5b6bf49d417122-9181195-images-thumbs&n=13", 
  },
  {
    title: "Wonders of the Cosmos",
    author: "John Smith",
    genre: "Science Fiction",
    publicationDate: "2018-10-08",
    summary: "Explore the infinite wonders of the cosmos in this engaging narrative.",
    cover: "https://avatars.mds.yandex.net/i?id=b15500c2a11bfee2b68a7925c2a3a28ed4a1b004-9053197-images-thumbs&n=13",
  },
  {
    title: "The Mystery of Time",
    author: "Jane Doe",
    genre: "Mystery",
    publicationDate: "2020-01-12",
    summary: "A thrilling tale that takes you through time and mysteries unsolved.",
    cover: "https://avatars.mds.yandex.net/i?id=005a28683390aa1f95cc7b973a746a4bfe1d2a52-10467945-images-thumbs&n=13", 
  },
  {
    title: "Wonders of the Cosmos",
    author: "John Smith",
    genre: "Science Fiction",
    publicationDate: "2018-10-08",
    summary: "Explore the infinite wonders of the cosmos in this engaging narrative.",
    cover: "https://avatars.mds.yandex.net/i?id=44e510ac1435845b46ebf24b032bad75b02e4e6f-11395047-images-thumbs&n=13",
  },
  {
    title: "The Mystery of Time",
    author: "Jane Doe",
    genre: "Mystery",
    publicationDate: "2020-01-12",
    summary: "A thrilling tale that takes you through time and mysteries unsolved.",
    cover: "https://avatars.mds.yandex.net/i?id=425f3b4a6968fedcd9393f90f1ad7e11cd8cdb5f-10414208-images-thumbs&n=13", 
  },
  {
    title: "Wonders of the Cosmos",
    author: "John Smith",
    genre: "Science Fiction",
    publicationDate: "2018-10-08",
    summary: "Explore the infinite wonders of the cosmos in this engaging narrative.",
    cover: "https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  
  {
    title: "The Mystery of Time",
    author: "Jane Doe",
    genre: "Mystery",
    publicationDate: "2020-01-12",
    summary: "A thrilling tale that takes you through time and mysteries unsolved.",
    cover: "https://avatars.mds.yandex.net/i?id=8403bdffe3dd5b976eb1493e1645b96c6d42f83e-8878159-images-thumbs&n=13", 
  },
  {
    title: "Wonders of the Cosmos",
    author: "John Smith",
    genre: "Science Fiction",
    publicationDate: "2018-10-08",
    summary: "Explore the infinite wonders of the cosmos in this engaging narrative.",
    cover: "https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  
  {
    title: "The Mystery of Time",
    author: "Jane Doe",
    genre: "Mystery",
    publicationDate: "2020-01-12",
    summary: "A thrilling tale that takes you through time and mysteries unsolved.",
    cover: "https://avatars.mds.yandex.net/i?id=fafa5eabf14c5d9093bc74408c71ffd752668ef9-5578507-images-thumbs&n=13", 
  },
  {
    title: "Wonders of the Cosmos",
    author: "John Smith",
    genre: "Science Fiction",
    publicationDate: "2018-10-08",
    summary: "Explore the infinite wonders of the cosmos in this engaging narrative.",
    cover: "https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  
  {
    title: "The Mystery of Time",
    author: "Jane Doe",
    genre: "Mystery",
    publicationDate: "2020-01-12",
    summary: "A thrilling tale that takes you through time and mysteries unsolved.",
    cover: "https://i.pinimg.com/736x/c1/37/83/c13783fc6716a0134425b23ad2ffd0bf.jpg", 
  },
  {
    title: "Wonders of the Cosmos",
    author: "John Smith",
    genre: "Science Fiction",
    publicationDate: "2018-10-08",
    summary: "Explore the infinite wonders of the cosmos in this engaging narrative.",
    cover: "https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  
  
 
];

const BookList = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [uploadedImage, setUploadedImage] = useState(null); // Store the uploaded image file

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  const handleBorrowClick = (book) => {
    setBorrowedBooks((prevBooks) => [...prevBooks, book]);
    alert(`${book.title} has been borrowed!`);
    closeModal();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedImage(URL.createObjectURL(file)); // Create an object URL for the uploaded file
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
    <div className="flex items-center justify-between mb-6 flex-wrap">
      <h2 className="text-3xl font-semibold text-gray-800 w-full sm:w-auto">Available eBooks</h2>
      <div className="flex flex-wrap space-x-4 mt-4 sm:mt-0">
        <select className="px-4 py-2 border rounded-md w-full sm:w-auto mb-4 sm:mb-0">
          <option value="all">All Genres</option>
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-fiction</option>
        </select>
        <select className="px-4 py-2 border rounded-md w-full sm:w-auto mb-4 sm:mb-0">
          <option value="all">All Authors</option>
          <option value="author1">Author 1</option>
          <option value="author2">Author 2</option>
        </select>
        <input
          type="date"
          className="px-4 py-2 border rounded-md w-full sm:w-auto mb-4 sm:mb-0"
          placeholder="Publication Date"
        />
      </div>
    </div>
  
    {/* Book Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {eBooks.map((book, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
          <img
            src={book.cover}
            alt={book.title}
            className="w-full h-48 object-cover rounded-md mb-4 cursor-pointer"
            onClick={() => handleBookClick(book)}
          />
          <h3 className="text-xl font-semibold text-gray-700">{book.title}</h3>
          <p className="text-gray-500">Author: {book.author}</p>
          <p className="text-gray-400">Genre: {book.genre}</p>
          <p className="text-gray-400">Published: {book.publicationDate}</p>
          <button
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 w-full sm:w-auto"
            onClick={() => handleBookClick(book)}
          >
            More Info
          </button>
        </div>
      ))}
    </div>
  
    {/* Modal for Detailed View */}
    {selectedBook && (
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg w-full max-w-lg">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          >
            X
          </button>
          <h2 className="text-2xl font-semibold text-gray-800">{selectedBook.title}</h2>
          <img
            src={uploadedImage || selectedBook.cover} // Use uploaded image if available, else fallback to default cover
            alt={selectedBook.title}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <p className="text-gray-500">Author: {selectedBook.author}</p>
          <p className="text-gray-400">Genre: {selectedBook.genre}</p>
          <p className="text-gray-400">Published: {selectedBook.publicationDate}</p>
          <p className="text-gray-600 mt-4">{selectedBook.summary}</p>
          <button
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 w-full sm:w-auto"
            onClick={() => handleBorrowClick(selectedBook)}
          >
            Borrow
          </button>
        </div>
      </div>
    )}
  </div>
  
  );
};

export default BookList;
