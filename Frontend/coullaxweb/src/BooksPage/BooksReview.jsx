import React, { useEffect, useState } from 'react';
import BookCard from './Components/BookCard.jsx';
import AddBookReviewForm from '../AddBookReviewPage/AddBookReviewForm.jsx';
import { useNavigate } from 'react-router';
import { getAllBooksReviews } from '../Service/BookReviewService.jsx';


function BooksReviews() {

      const navigate = useNavigate();
      const [uniqueBooks, setUniqueBooks] = useState([]);
      const [bookList, setBookList] = useState([]);

      function openPage(){
            navigate('/addReview');
      }

      useEffect(() => {
        getBookReviews();
    
      }, [])
    
      const getBookReviews = async () => {
        try {
          const reviews = await getAllBooksReviews();
          console.log(reviews.data);

          const newlist = reviews.data.map(review => ({
            name: review.bookTitle,
            author: review.author,
          }));

          setBookList(reviews.data);
          console.log("Here New list", newlist);

          const uniqueList = [];
          for (let i = 0; i < reviews.data.length; i++) {
            const review = reviews.data[i];
            if (!uniqueList.some(book => book.name === review.bookTitle && book.author === review.author)) {
              uniqueList.push({
                name: review.bookTitle,
                author: review.author,
              });
            }
          }
          setUniqueBooks(uniqueList);
          console.log("Uniq", uniqueBooks);

        } catch (e) {
          console.error('Error fetching book reviews:', e);
        }
      };
    
      

      return (
        <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
          <div className="container mx-auto p-6 font-sans">
            
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Books Reviews</h1>
                <p className="text-sky-600 mt-2">Discover your next great read</p>
              </div>
              <button className="px-6 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors duration-300 shadow-md hover:shadow-lg" onClick={openPage}>
                Add New Review
              </button>
            </div>
    
            
            <div className="mb-8">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search books..." 
                  className="w-full p-3 pl-10 rounded-lg border border-sky-200 focus:outline-none focus:border-sky-500 bg-white"
                />
                <svg 
                  className="absolute left-3 top-3.5 h-5 w-5 text-sky-400"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
    
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {uniqueBooks.length > 0 ? (
                console.log("pass"),
                uniqueBooks.map((book, index) => (
                  <BookCard key={index} name={book.name} author={book.author} bookList={bookList} />
                ))
              ) : (
                console.log("fail", uniqueBooks),

                <p className="text-gray-500 text-center col-span-full">No books available.</p>
              )}
            </div>
          </div>
        </div>
      );
    };
    
export default BooksReviews;