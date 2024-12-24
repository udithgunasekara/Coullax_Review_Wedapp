import React from 'react';
import { useNavigate } from 'react-router';

function BookCard ({ name, author,bookList }){

      const navigate = useNavigate();

      function openPage(){
        console.log("openPage Here", bookList);
        navigate('/reviewPage', {state: { name, author, bookList }});
      }

      return (
        <div className="w-full md:w-64 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
          <div className="h-32 bg-sky-100 flex items-center justify-center">
            <svg className="w-16 h-16 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div className="p-4">
            
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{name}</h2>
            <p className="text-sky-600">{author}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-gray-500">Get insights →</span>
              <button className="text-sky-500 hover:text-sky-600 text-sm font-medium" onClick={openPage} >
                Read Review
              </button>
            </div>
          </div>
        </div>
      );
    };
export default BookCard;