import Book from '../models/book.mjs'

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).send(books);
  } catch (error) {
    console.log(error);
    return res.status(500).send({msg: "Internal Server Error"});
  }
};

const getBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById({_id: id});
    return res.status(200).send(book);
  } catch(error){
    console.log(error);
    return res.status(500).send({msg: "Internal Server Error"});
  }
};

const createBook = async (req, res) => {
  try {
    const { name, author, releaseDate } = req.body;
    const newBook = await Book.create({ name, author, releaseDate });
    return res.status(200).send(newBook);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({msg: "Internal Server Error"});
  }
}

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, author, releaseDate } = req.body;
    const book = await Book.findByIdAndUpdate(id, { name, author, releaseDate });
    return res.status(200).send(book);
  } catch(error){
    console.log(error);
    return res.status(500).send({msg: "Internal Server Error"});
  }
}

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    await Book.findByIdAndDelete(id);
    return res.status(201).send();
  } catch(error){
    console.log(error);
    return res.status(500).send({msg: "Internal Server Error"});
  }
}

export {getAllBooks, getBook, createBook, updateBook, deleteBook};