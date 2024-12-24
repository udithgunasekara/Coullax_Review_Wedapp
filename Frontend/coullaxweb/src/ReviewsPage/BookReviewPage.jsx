import React, { useEffect, useState } from 'react'
import ReviewCard from './Components/ReviewCard';
import { useLocation, useNavigate } from 'react-router';
import { deleteBookReview } from '../Service/BookReviewService';


//using props pass getter list booksRev
function BookReviewPage () {

  const location = useLocation();
  const navigate = useNavigate();

  const [reviewList, setReviewList] = useState([]);

  const { name, author, bookList } = location.state

    
  useEffect(() => {
      filterReviews();
      console.log("Book list:", bookList);

  },[])

  const filterReviews = () => {

    const newReviewList = [];
    for (let i = 0; i < bookList.length; i++) {
       const review = bookList[i];
      if ((name === review.bookTitle && author === review.author)) {
        newReviewList.push({
            id: review.id,
            review: review.review,
            rating: review.rating,
            date: review.reviewDate,
         });
       }
    }
     setReviewList(newReviewList);
     console.log("ReviewList:", newReviewList);
    }

    
      const handleEdit = (id) => {
        console.log('Edit review:', id);

        
        navigate(`/addReview/${id}`);


        
      };
    
      const handleDelete = (id) => {
        console.log('Delete review:', id);
        const responce = deleteBookReview(id);
        console.log("Deletion status:",responce.data);
        navigate('/')
        
      };
    
      return (
        <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white py-8 px-4">
          <div className="container mx-auto">
            {/* Headers */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                {name}
              </h1>
              <h2 className="text-2xl text-sky-600">
                by {author}
              </h2>
            </div>
    
            {/* Reviews Section */}
            <div className="space-y-6">
              {reviewList.map((review) => (
                <ReviewCard
                  key={review.id}
                  review={review.review}
                  rating={review.rating}
                  date={review.date} 
                  
                  onEdit={() =>handleEdit(review.id)}
                  onDelete={() => handleDelete(review.id)}
                />
              ))}
            </div>
    
            
            <div className="flex justify-center mt-8">
              <button className="px-6 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors duration-300 shadow-md hover:shadow-lg">
                Add New Review
              </button>
            </div>
          </div>
        </div>
      );
    };
    
    export default BookReviewPage;