import { BrowserRouter as Router,
  Routes,
  Route, } from "react-router";

import BooksReviews from "./BooksPage/BooksReview";
import BookReviewPage from "./ReviewsPage/BookReviewPage";
import AddBookReviewForm from "./AddBookReviewPage/AddBookReviewForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BooksReviews />} />
      <Route path="/reviewPage" element={<BookReviewPage />} />
      <Route path="/addReview" element={<AddBookReviewForm/>}/>
      <Route path="/addReview/:id" element={<AddBookReviewForm />} />

    </Routes>
    
  );
}

export default App;
