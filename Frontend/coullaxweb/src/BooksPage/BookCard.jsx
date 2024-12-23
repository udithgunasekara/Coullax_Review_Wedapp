import React from 'react';

const BookCard = ({ name, author }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md w-60">
      <h2 className="text-lg font-semibold mb-2">{name}</h2>
      <p className="text-sm text-gray-600">Author: {author}</p>
    </div>
  );
};

export default BookCard;
