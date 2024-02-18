import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ListBook from "./pages/ListBook.jsx";
import CreateBook from "./pages/CreateBook.jsx";
import UpdateBook from "./pages/UpdateBook.jsx";
import DeleteBook from "./pages/DeleteBook.jsx";

import "./index.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/details/:id" element={<ListBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
      <Route path="/books/edit/:id" element={<UpdateBook />} />
    </Routes>
  );
}