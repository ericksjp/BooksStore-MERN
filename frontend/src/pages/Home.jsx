import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { MdOutlineAddBox } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { SnackbarProvider } from 'notistack';


import Loader from "../components/Loader";
import api from "../services/api";
import DeleteModal from "../components/DeleteModal";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get("/").then((response) => { 
      setBooks(response.data);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
  }, []);

  return (
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
                    <SnackbarProvider>
                      <DeleteModal bookInfo={book} />
                    </SnackbarProvider>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};