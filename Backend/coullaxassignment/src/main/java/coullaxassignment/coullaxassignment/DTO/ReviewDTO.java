package coullaxassignment.coullaxassignment.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;
import java.util.Date;


public class ReviewDTO {

   private int id;
   private String bookTitle;
    private String author;
    private int rating;
    private  String review;
    private LocalDate reviewDate;

    public ReviewDTO(int id, String bookTitle, String author, int rating, String review, LocalDate reviewDate) {
        this.id = id;
        this.bookTitle = bookTitle;
        this.author = author;
        this.rating = rating;
        this.review = review;
        this.reviewDate = reviewDate;
    }
    public ReviewDTO() {
    }

    //create getter and setter methods
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBookTitle() {
        return bookTitle;
    }

    public void setBookTitle(String bookTitle) {
        this.bookTitle = bookTitle;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public LocalDate getReviewDate() {
        return reviewDate;
    }

    public void setReviewDate(LocalDate reviewDate) {
        this.reviewDate = reviewDate;
    }

}
