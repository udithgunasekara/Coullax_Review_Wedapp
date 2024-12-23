package coullaxassignment.coullaxassignment.Service;

import coullaxassignment.coullaxassignment.DTO.ReviewDTO;

import java.util.List;

public interface ReviewService {

    ReviewDTO saveReview(ReviewDTO reviewDTO);
    List<ReviewDTO> getAllReviews();
    ReviewDTO updateReview(int id, ReviewDTO reviewDTO);

    String deleteReview(int id);
}
