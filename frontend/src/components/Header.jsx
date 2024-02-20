import React, { useContext } from "react";
import { MdOutlineAddBox, MdCancelPresentation } from "react-icons/md";

import BookCard from "./BookCard";
import { ToggleContext } from "../contexts/ToggleContext";

export default function Header() {
  const { create, toggleCreate } = useContext(ToggleContext);

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-sky-800">Books List</h1>
        <button onClick={toggleCreate} className="text-sky-800 text-4x1 size-8">
          {create && <MdCancelPresentation className="text-red-600 text-4x1 size-8" />}
          {!create && <MdOutlineAddBox className="text-green-600 text-4x1 size-8" />}
        </button>
      </div>
      {create && (
        <div className="border-b-2 border-t-2 mt-4 border-green-400 bg-slate-100 rounded-xl">
          <BookCard option={4}/>
        </div>
      )}
    </>
  );
}
