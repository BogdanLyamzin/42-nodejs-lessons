const { Schema, ObjectId } = require("mongoose");

const authorSchema = Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  lastName: {
    type: String,
    require: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: [true, "Each author must have email"],
    unique: true,
  },
  books: [
    {
      type: ObjectId,
      ref: "Book",
    },
  ],
});

module.exports = authorSchema;
