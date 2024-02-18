import React from "react";

export default function BookCard({ book }) {
  return (
    <div className="book-card">
      <h2>{book.name}</h2>
      <p>{book.author}</p>
      <p>{book.pages}</p>
    </div>
  );
}