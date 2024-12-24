import axios from "axios";

const REST_API_CREATE_BOOK_REVIEW = "http://localhost:8082/reviews";
const REST_API_GET_ALL_BOOKS_REVIEWS = "http://localhost:8082/reviews";
const REST_API_UPDATE_BOOK_REVIEW = "http://localhost:8082/reviews";
const REST_API_DELETE_BOOK_REVIEW = "http://localhost:8082/reviews";
const REST_API_GET_BY_ID = "http://localhost:8082/reviews"

export const createBookReview = (Review) => axios.post(REST_API_CREATE_BOOK_REVIEW, Review); //Done
export const getAllBooksReviews = (Review) => axios.get(REST_API_GET_ALL_BOOKS_REVIEWS,Review); //Done

export const updateBookReview = (id, updatedReview) =>  axios.put(`${REST_API_UPDATE_BOOK_REVIEW}/${id}`, updatedReview); //Done
export const deleteBookReview = (id) => axios.delete(`${REST_API_DELETE_BOOK_REVIEW}/${id}`); //Done

export const getByIdReview = (id) => axios.get(`${REST_API_GET_BY_ID}/${id}`); //Done

