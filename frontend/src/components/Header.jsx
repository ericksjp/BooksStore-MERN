import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";

export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-4xl font-bold text-sky-800">Books List</h1>
      <Link to="/books/create">
        <MdOutlineAddBox className="text-sky-800 text-4x1 size-8" />
      </Link>
    </div>
  );
}
