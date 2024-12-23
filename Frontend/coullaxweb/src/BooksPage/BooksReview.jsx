import React from 'react';
import BookCard from './BookCard.jsx'; // Assuming the BookCard component is in the same folder

const BooksReviews = () => {
  const books = [
    { name: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { name: '1984', author: 'George Orwell' },
    { name: 'To Kill a Mockingbird', author: 'Harper Lee' }
  ];

  return (
    <div className="p-6 font-sans">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Books Reviews</h1>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add New Review</button>
      </div>

      {/* Books List */}
      <div className="flex flex-wrap gap-4">
        {books.length > 0 ? (
          books.map((book, index) => (
            <BookCard key={index} name={book.name} author={book.author} />
          ))
        ) : (
          <p>No books available.</p>
        )}
      </div>
    </div>
  );
};

export default BooksReviews;
