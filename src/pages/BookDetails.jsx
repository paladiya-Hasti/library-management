import React from "react";
import { useParams } from "react-router-dom"; // Import useParams to get the book id from the URL

const eBooks = [
  {
    id: 1,
    title: "The Mystery of Time",
    author: "Jane Doe",
    genre: "Mystery",
    publicationDate: "2020-01-12",
    summary: "A thrilling tale that takes you through time and mysteries unsolved.",
    cover: "book-cover.jpg",
  },
  {
    id: 2,
    title: "Wonders of the Cosmos",
    author: "John Smith",
    genre: "Science Fiction",
    publicationDate: "2018-10-08",
    summary: "Explore the infinite wonders of the cosmos in this engaging narrative.",
    cover: "book-cover.jpg",
  },
  {
    id: 3,
    title: "Heartstrings Unbroken",
    author: "Emily Grace",
    genre: "Romance",
    publicationDate: "2022-02-14",
    summary: "A heartfelt journey through love, loss, and rediscovery.",
    cover: "book-cover.jpg",
  },
  {
    id: 4,
    title: "Leadership Unveiled",
    author: "Michael Carter",
    genre: "Self-Help",
    publicationDate: "2021-11-01",
    summary: "Insights and strategies for becoming a transformative leader.",
    cover: "book-cover.jpg",
  },
];

const BookDetails = () => {
  const { id } = useParams(); // Get the book id from the URL
  const book = eBooks.find((book) => book.id === parseInt(id)); // Find the selected book by id

  if (!book) {
    return <div className="text-center text-lg text-red-600">Book not found</div>; // Show message if book is not found
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={book.cover}
        alt={book.title}
        className="w-full h-96 object-cover rounded-md mb-6 sm:h-72 md:h-96"
      />
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">{book.title}</h2>
      <p className="text-lg text-gray-500 mb-1">Author: {book.author}</p>
      <p className="text-lg text-gray-400 mb-1">Genre: {book.genre}</p>
      <p className="text-lg text-gray-400 mb-1">Published: {book.publicationDate}</p>
      <p className="text-lg text-gray-600 mt-4">{book.summary}</p>
      <button
        className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
      >
        Borrow
      </button>
    </div>
  );
};

export default BookDetails;
