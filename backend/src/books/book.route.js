const express = require("express");
const Book = require("./book.model");
const {
  postABook,
  getAllBooks,
  getSingleBook,
  updateABook,
  deleteABook,
} = require("./book.controller");
const router = express.Router();

// <----------------- client side ----------------->

//get all books
router.get("/", getAllBooks);
//get single book
router.get("/:id", getSingleBook);

// <----------------- admin side ----------------->

//post a book
router.post("/create-book", postABook);

//update a book
router.put("/edit/:id", updateABook);

//delete a book
router.delete('/delete/:id', deleteABook)

module.exports = router;
