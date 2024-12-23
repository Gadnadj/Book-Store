const express = require("express");
const Book = require("./book.model");
const {
  postABook,
  getAllBooks,
  getSingleBook,
  updateABook,
} = require("./book.controller");
const router = express.Router();

//post a book
router.post("/create-book", postABook);

//get all books
router.get("/", getAllBooks);
//get single book
router.get("/:id", getSingleBook);

//update a book
router.put("/edit/:id", updateABook);

module.exports = router;
