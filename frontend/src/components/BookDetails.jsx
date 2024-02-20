import React from "react";
import { useState, useEffect } from "react";

export default function BookDetails({book}) {
  return (
    <>
      <span className="text-gray-500 mt-2 italic">{book._id}</span>
      <div className="my-1">
        <h3 className="text-2xl text-gray-700 text-30 font-semibold">Name</h3>
        <p className="text-lg italic">{book.name}</p>
      </div>
      <div className="my-2">
        <h3 className="text-2xl text-gray-700 text-30 font-semibold">
          Author
        </h3>
        <p className="text-lg italic">{book.author}</p>
      </div>
      <div className="my-2">
        <h3 className="text-2xl text-gray-700 text-30 font-semibold">
          Publish Year
        </h3>
        <p className="text-lg italic">{book.publishYear}</p>
      </div>
    </>
  );};