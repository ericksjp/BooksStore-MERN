// BookListContext.js
import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

const BookListContext = createContext();

const BookListProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      // Replace with your API call to fetch books
      const response = await api.get('/');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []); // Fetch books on initial render

  const handleRefresh = async () => {
    await fetchBooks(); // Refetch books after deletion
  };

  return (
    <BookListContext.Provider value={{ books, handleRefresh }}>
      {children}
    </BookListContext.Provider>
  );
};

export { BookListContext, BookListProvider };