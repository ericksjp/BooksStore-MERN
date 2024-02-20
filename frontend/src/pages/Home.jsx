import React, { useContext } from "react";
import { SnackbarProvider } from 'notistack';

import BookCard from "../components/BookCard.jsx";
import { BookListContext } from "../contexts/BookListContext.jsx";
import Header from "../components/Header.jsx";

export default function Home() {
  const { books } = useContext(BookListContext);

  return (
    <SnackbarProvider>
      <div className="flex min-h-screen size-full bg-gray-300">
        <div className="h-fit m-4 p-4 w-full max-w-3xl mx-auto border-2 border-sky-800 bg-gray-200">
          <Header />
          <div className="flex w-full flex-wrap">
            {books.map((book, index) => (
              <BookCard book={book} key={book._id}/>
            ))}
          </div>
        </div>
      </div>
    </SnackbarProvider>
  );
};