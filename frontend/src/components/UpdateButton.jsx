import React, { useContext } from "react";
import api from "../services/api";
import { useSnackbar } from 'notistack';
import { BookListContext } from "../contexts/BookListContext";

import { MdEdit } from "react-icons/md";

export default function UpdateButton(props) {
  const { enqueueSnackbar } = useSnackbar();

  const { handleRefresh } = useContext(BookListContext);

  const handleUpdateBook = async () => {
    const newData = {
      name: props.values.name,
      author: props.values.author,
      publishYear: props.values.publishYear
    }
    try {
      await api.put(`/${props.bookId}`, newData);
      handleRefresh();
      enqueueSnackbar("All Set!", { variant: "success" });
    }catch(error){
      console.log(error);
      enqueueSnackbar("Error! Try again.", { variant: "error" });
    };
  }

  return (
      <div className="h-20 flex flex-col absolute right-1 top-0 z-10 w-10 border-l-4">
        <button 
          onClick={handleUpdateBook}
          className="w-full h-2/4 relative flex flex-col items-center px-5 py-2 text-sm font-medium text-center text-white text-yellow-700 bg-yellow-400 hover:bg-yellow-500 justify-center rounded-tr-lg"
        >
        <MdEdit className="text-2xl"/>
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