const { Schema, ObjectId } = require("mongoose");

const bookSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
    unique: true,
  },
  genre: {
    type: String,
    required: true
  }
  author: {
    type: ObjectId,
    ref: "Author",
    required: true,
  },
});

module.exports = bookSchema;
