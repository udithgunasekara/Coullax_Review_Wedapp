import React, { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router';
import { createBookReview, getByIdReview, updateBookReview } from '../Service/BookReviewService';

const AddBookReviewForm = () => {

  const {id} = useParams();

  useEffect(() => {
    if (id){
      console.log("Editing review with ID:" ,id);
      fetchReviewById(id);
      
    }
  },[id])
  
  const fetchReviewById = async (reviewId) => {
    try {
      const response = await getByIdReview(reviewId);
      const { bookTitle, author, rating, review } = response.data;
      setBookTitle(bookTitle);
      setAuthor(author);
      setRating(rating);
      setReview(review);
      console.log("Fetched review data:", response.data);
    } catch (error) {
      console.error('Error fetching review by ID:', error);
    }
  };


  const navigate = useNavigate();

  const [bookTitle, setBookTitle]  = useState('');
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === 'bookTitle') setBookTitle(value);
    else if (id === 'author') setAuthor(value);
    else if (id === 'rating') setRating(value);
    else if (id === 'review') setReview(value);
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const reviewData = {
      bookTitle,
      author,
      rating,
      review,
    };
    
    try{
      if(!!id ){
        console.log("submitted review:", reviewData);
      const responce = await updateBookReview(id, reviewData);
      console.log('Review added successfully!', responce);
      navigate('/') //navigate to home

      }
      console.log("submitted review:", reviewData);
      const responce = await createBookReview(reviewData);
      console.log('Review added successfully!', responce);
      navigate('/') //navigate to home


    }catch (e){
      console.error('Error creating review:', e);
      console.log('Failed to add review. Please try again later.');
    }
  
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white py-8 px-4">
      <div className="container mx-auto max-w-2xl">
       
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Add Book Review</h1>
          <p className="text-sky-600 mt-2">Share your thoughts about the book</p>
        </div>

        
        <div className="bg-white rounded-lg shadow-md p-6">
          <form className="space-y-6" onSubmit={handleSubmit}>
           
            <div>
              <label 
                 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Book Title *
              </label>
              <input
                type="text"
                id="bookTitle"
                className="w-full p-3 rounded-lg border border-sky-200 focus:outline-none focus:border-sky-500 bg-white"
                placeholder="Enter book title"
                value={bookTitle}
                onChange={handleChange}
                disabled={!!id}
                
              />
            </div>

            {/* Author */}
            <div>
              <label 
                
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Author *
              </label>
              <input
                type="text"
                id="author"
                className="w-full p-3 rounded-lg border border-sky-200 focus:outline-none focus:border-sky-500 bg-white"
                placeholder="Enter author name"
                value={author}
                onChange={handleChange}
                disabled={!!id}
              />
            </div>

            {/* Rating */}
            <div>
              <label 
                
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Rating *
              </label>
              <select
              onChange={handleChange}
                id="rating"
                className="w-full p-3 rounded-lg border border-sky-200 focus:outline-none focus:border-sky-500 bg-white" value={rating}>
                <option value="">Select rating</option>
                <option value="5">5 - Excellent</option>
                <option value="4">4 - Very Good</option>
                <option value="3">3 - Good</option>
                <option value="2">2 - Fair</option>
                <option value="1">1 - Poor</option>
                
              </select>
             
            </div>
          
            {/* Review Text */}
            <div>
              <label 
                
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Review Text *
              </label>
              <textarea
                id="review"
                rows="6"
                className="w-full p-3 rounded-lg border border-sky-200 focus:outline-none focus:border-sky-500 bg-white resize-none"
                placeholder="Write your review here..."
                value={review}
                onChange={handleChange}
              ></textarea>
            </div>

           {/* imp cancle */}
            <div className="flex justify-end space-x-4 pt-4">
              <button
                type="button"
                className="px-6 py-2 border border-sky-500 text-sky-500 rounded-lg hover:bg-sky-50 transition-colors duration-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBookReviewForm;