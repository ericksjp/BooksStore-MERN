import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, "Name is required"],
    trim: true,
    maxlenght: [70, "Name cannot be more than 70 characters"],
  },
  author: {
    type: String,
    required: [true, "Author is required"],
    trim: true,
    maxlenght: [70, "Author cannot be more than 70 characters"],
  },
  releaseDate: {
    type: Date,
    required: [true, "Release date is required"],
  },
});

const Book = mongoose.model("Book", BookSchema);

export default Book;