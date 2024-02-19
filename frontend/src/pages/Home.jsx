import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { MdOutlineAddBox } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { SnackbarProvider } from 'notistack';

import { BookListContext } from "../contexts/BookListContext.jsx";

import Loader from "../components/Loader";
import DeleteModal from "../components/DeleteModal";
import EditModal from "../components/EditModal.jsx";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const { books } = useContext(BookListContext) || []; // Provide default value

  return (
    <SnackbarProvider>
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-sky-800">Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className="text-sky-800 text-4x1 size-8"/>
        </Link>
      </div>
      { loading 
      ? (<Loader />)
      : (
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md">No</th>
              <th className="border border-slate-600 rounded-md">Title</th>
              <th className="border border-slate-600 rounded-md">Author</th>
              <th className="border border-slate-600 rounded-md">Publish Year</th>
              <th className="border border-slate-600 rounded-md">Operations</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id}>
                <td className="border border-slate-700 rounded-md text-center">{index + 1}</td>
                <td className="border border-slate-700 rounded-md text-center">{book.name}</td>
                <td className="border border-slate-700 rounded-md text-center">{book.author}</td>
                <td className="border border-slate-700 rounded-md text-center">{book.publishYear}</td>
                <td className="border border-slate-700 rounded-md text-center">
                  <div className="flex gap-2 justify-center" >
                    <Link to={`/books/details/${book._id}`}>
                      <IoIosInformationCircleOutline className="text-2xl text-green-800"/>
                    </Link>
                    <Link to={`/books/edit/${book._id}`}> 
                      <CiEdit className="text-2xl text-yellow-600"/>
                    </Link>
                      <DeleteModal bookInfo={book}/>
                      {/* <EditModal /> */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </SnackbarProvider>
  );
};