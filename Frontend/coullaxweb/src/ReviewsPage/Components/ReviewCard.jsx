import React from 'react';

const ReviewCard = ({ review, rating, onEdit, onDelete, date }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 max-w-3xl mx-auto">
      <div className="flex justify-between">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <span className="text-lg text-sky-600 font-semibold">Rating: {rating}/5</span>
              <div className="ml-2 text-yellow-600">
                {'★'.repeat(rating)}{'☆'.repeat(5-rating)}
              </div>
            </div>
            <span className="text-sm text-gray-500">
              {date}
            </span>
          </div>
          <p className="text-gray-700 leading-relaxed">{review}</p>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <span className="text-sm text-gray-500 italic">Last updated: {date}</span>
        <div className="space-x-2">
          <button 
            onClick={onEdit}
            className="px-4 py-2 text-sky-600 hover:text-sky-700 font-medium"
          >
            Edit
          </button>
          <button 
            onClick={onDelete}
            className="px-4 py-2 text-red-600 hover:text-red-700 font-medium"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;