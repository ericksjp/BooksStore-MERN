import asyncWrapper from '../middlewares/async.mjs';
import Book from '../models/book.mjs'

const getAllBooks = asyncWrapper( async (req, res) => {
  const books = await Book.find({});
  return res.status(200).send(books);
});

const getBook = asyncWrapper( async (req, res) => {
  const { id } = req.params;
  const book = await Book.findById({_id: id});
  return res.status(200).send(book);
});

const createBook = asyncWrapper( async (req, res) => {
  const { name, author, releaseDate } = req.body;
  const newBook = await Book.create({ name, author, releaseDate });
  return res.status(200).send(newBook);
});

const updateBook = asyncWrapper( async (req, res) => {
  const { id } = req.params;
  const { name, author, releaseDate } = req.body;
  const book = await Book.findByIdAndUpdate(id, { name, author, releaseDate });
  return res.status(200).send(book);
});

const deleteBook = asyncWrapper( async (req, res) => {
  const { id } = req.params;
  await Book.findByIdAndDelete(id);
  return res.status(201).send();
});

export {getAllBooks, getBook, createBook, updateBook, deleteBook};