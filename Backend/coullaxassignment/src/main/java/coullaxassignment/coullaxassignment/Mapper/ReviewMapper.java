package coullaxassignment.coullaxassignment.Mapper;


import coullaxassignment.coullaxassignment.DTO.ReviewDTO;
import coullaxassignment.coullaxassignment.Entity.Review;

public class ReviewMapper {
    //Mapper to map ReviewDTO to Review and Review to ReviewDTO
    public static ReviewDTO mapToReviewDTO(Review review) {
        return new ReviewDTO(
                review.getId(),
                review.getBookTitle(),
                review.getAuthor(),
                review.getRating(),
                review.getReview(),
                review.getReviewDate());


    }
    public static Review mapToReview(ReviewDTO reviewDTO) {
        return new Review(
                reviewDTO.getId(),
                reviewDTO.getBookTitle(),
                reviewDTO.getAuthor(),
                reviewDTO.getRating(),
                reviewDTO.getReview(),
                reviewDTO.getReviewDate()
        );
    }
}
