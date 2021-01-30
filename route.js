const express = require('express');
const bodyParser = require('body-parser');
const Book = require('./Model/book');
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.json());
router.get("/books", async(req, res) => {
    const book = await Book.find();
    res.send(book);
});
// Create
router.post("/books", async(req, res) => {
    const book = new Book({
        name: req.body.name,
        qty: req.body.qty
    });
    await book.save();
    res.send("Record Created");
});
module.exports = router;