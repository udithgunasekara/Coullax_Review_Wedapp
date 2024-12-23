package coullaxassignment.coullaxassignment.Repository;

import coullaxassignment.coullaxassignment.Entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface ReviewRepo extends JpaRepository<Review,Integer> {
}
