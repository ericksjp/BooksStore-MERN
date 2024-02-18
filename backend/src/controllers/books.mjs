import asyncWrapper from '../middlewares/async.mjs';
import ValidateBodyProps from '../utils/validateBodyProps.mjs';
import Book from '../models/book.mjs'

const getAllBooks = asyncWrapper( async (req, res) => {
  let books = await Book.find({});
  return res.status(200).send(books);
});

const getBook = asyncWrapper( async (req, res) => {
  const { id } = req.params;
  const book = await Book.findById({_id: id});
  return res.status(200).send(book);
});

const createBook = asyncWrapper( async (req, res) => {
  const { name, author, publishYear } = req.body;
  const newBook = await Book.create({ name, author, publishYear });
  return res.status(200).send(newBook);
});

const updateBook = 
  asyncWrapper ( async (req, res) => {
  ValidateBodyProps(["name", "author", "publishYear"], req.body);
  const { id } = req.params;
  const { name, author, publishYear } = req.body;
  const book = await Book.findByIdAndUpdate(id, { name, author, publishYear });
  return res.status(200).send(book);
});

const deleteBook = asyncWrapper( async (req, res) => {
  const { id } = req.params;
  await Book.findByIdAndDelete(id);
  return res.status(201).send();
});

export {getAllBooks, getBook, createBook, updateBook, deleteBook};