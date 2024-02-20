import React, { useContext } from "react";
import api from "../services/api";
import { useSnackbar } from 'notistack';
import { BookListContext } from "../contexts/BookListContext";
import { ToggleContext } from "../contexts/ToggleContext";

import { MdOutlineAddTask } from "react-icons/md";

export default function CreateButton({book}) {
  const { enqueueSnackbar } = useSnackbar();

  const { handleRefresh } = useContext(BookListContext);
  const { toggleCreate } = useContext(ToggleContext);

  const handleCreateBook = async () => {
    const newData = { name: book.name, author: book.author, publishYear: book.publishYear };
    try {
      await api.post(`/`, newData);
      toggleCreate();
      handleRefresh();
      enqueueSnackbar("Book Good.", { variant: "success", autoHideDuration: 2000 });
    } catch (error) {
      console.error(error)
      enqueueSnackbar("Error! Try again.", { variant: "error" });
    }
  };

  return (
      <div className="h-full flex flex-col absolute right-1 top-0 z-10 w-10 border-l-4">
        <button 
          onClick={handleCreateBook}
          className="h-full relative flex flex-col items-center px-5 py-2 text-sm font-medium text-center text-white text-yellow-700 bg-green-500 hover:bg-green-400 justify-center rounded-tr-lg rounded-br-lg"
        >
        <MdOutlineAddTask className="text-2xl text-white"/>
        </button>
      </div>
  );
};