package coullaxassignment.coullaxassignment.Service.Imp;

import coullaxassignment.coullaxassignment.DTO.ReviewDTO;
import coullaxassignment.coullaxassignment.Entity.Review;
import coullaxassignment.coullaxassignment.Exception.ResourceNotFound;
import coullaxassignment.coullaxassignment.Mapper.ReviewMapper;
import coullaxassignment.coullaxassignment.Repository.ReviewRepo;
import coullaxassignment.coullaxassignment.Service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import static org.hibernate.internal.util.collections.ArrayHelper.forEach;

@Service
public class ReviewServceImp implements ReviewService {


    @Autowired
    private ReviewRepo reviewRepo;

    @Override
    public ReviewDTO saveReview(ReviewDTO reviewDTO) {
        Review review = ReviewMapper.mapToReview(reviewDTO);
        //Save the review to the database
        Review savedReview = reviewRepo.save(review);

        return ReviewMapper.mapToReviewDTO(savedReview);
    }
    @Override
    public List<ReviewDTO> getAllReviews() {
        List<Review> reviews = reviewRepo.findAll();
        return reviews.stream().map(ReviewMapper::mapToReviewDTO).toList();
    }

    @Override
    public ReviewDTO updateReview(int id, ReviewDTO reviewDTO) {
        Review review = ReviewMapper.mapToReview(reviewDTO);

        //Update the review in the database
        Review existingReview = reviewRepo.findById(id).orElseThrow(() -> new ResourceNotFound("No Id found.. Failed to update"));

        existingReview.setReview(review.getReview());
        existingReview.setBookTitle(review.getBookTitle());
        existingReview.setAuthor(review.getAuthor());


        Review updatedReview = reviewRepo.save(existingReview);
        return ReviewMapper.mapToReviewDTO(updatedReview);

    }

 @Override
public String deleteReview(int id) {
    Optional<Review> review = reviewRepo.findById(id);
    if (review.isPresent()) {
        reviewRepo.deleteById(id);
        return "Review deleted successfully";
    } else {
        throw new ResourceNotFound("Review with id " + id + " not found");
    }
}
}

