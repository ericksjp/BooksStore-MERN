import React, { useContext } from "react";
import api from "../services/api";
import { useSnackbar } from 'notistack';
import { BookListContext } from "../contexts/BookListContext";

import { MdOutlineDelete } from "react-icons/md";


export default function DeleteButton(props) {
  const { enqueueSnackbar } = useSnackbar();

  const { handleRefresh } = useContext(BookListContext);

  const handleYesClick = async () => {
    try {
      await api.delete(`/${props.bookId}`);
      handleRefresh();
      enqueueSnackbar("Deleted", {
        variant: "success",
        autoHideDuration: 2000,
      });
      props.toggle(1);
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Error", { variant: "error" });
    }
  };

  return (
      <div className="h-20 flex flex-col absolute right-1 top-0 z-10 w-10 border-l-4">
        <button 
          onClick={handleYesClick}
          className="w-full h-2/4 relative flex flex-col items-center px-5 py-2 text-sm font-medium text-center text-white bg-red-500 hover:bg-red-600 justify-center rounded-tr-lg"
        >
        <MdOutlineDelete className="text-2xl"/>
        </button>
        <button 
          onClick={() => props.toggle(1)}
          className="w-full h-2/4 flex items-center px-5 py-2 text-sm font-medium text-xl text-white bg-blue-400 hover:bg-blue-500 justify-center rounded-bl-lg"
        >
          X
        </button>
      </div>
  );
};