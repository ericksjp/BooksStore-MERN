import React from "react";
import Home from "./pages/Home.jsx";

import { BookListProvider } from './contexts/BookListContext.jsx';

import "./index.css";

export default function App() {
  return (
    <BookListProvider>
      <Home />
    </BookListProvider>
  );
}