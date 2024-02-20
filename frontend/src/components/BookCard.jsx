import React from "react";
import { useState, useEffect } from "react";

import { MdOutlineDelete , MdEdit} from "react-icons/md";
import DeleteButton from "./DeleteButton.jsx";
import BookDetails from "../components/BookDetails.jsx";
import EditComponent from "../components/EditComponent.jsx";


export default function BookCard({book}) {
  const [option, setOption] = useState(1);

  function toggleOption(num) {
    setOption(num);
  }

  return (
    <div className="w-fibt p-5 mx-auto">
      <div className="relative border-2 border-sky-600 rounded-xl w-[500px] px-4 py-2 mx-auto">
        {option === 1 && (
          <>
          <div className="inline-flex flex-col float-right absolute right-0 top-0 border-l-2 border-b-2 rounded-bl-md border-sky-600 w-fit p-1 gap-4">
            <button onClick={() => toggleOption(2)}>
              <MdOutlineDelete className="p-1 text-3xl text-red-200 bg-red-600 hover:bg-red-500 rounded-full " />
            </button>
            <button onClick={() => toggleOption(3)}>
              <MdEdit className="p-1 text-3xl text-yellow-700 bg-yellow-400 hover:bg-yellow-300 rounded-full" />
            </button>
          </div>
          <BookDetails book={book} />
          </>
        )}
        {option === 2 && (
          <>
            <DeleteButton toggle={toggleOption} bookId={book._id}/>
            <BookDetails book={book} />
          </>
        )}
        {option === 3 && (
          <>
            <EditComponent book={book} toggle={toggleOption}/>
          </>
        )}

      </div>
    </div>
  );};