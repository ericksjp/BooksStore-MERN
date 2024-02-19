import React, { useState, useContext, useEffect } from "react";
import api from "../services/api";
import { useSnackbar } from 'notistack';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { BookListContext } from "../contexts/BookListContext";

import { CiEdit } from "react-icons/ci";

function EditModal(props) {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const toggleReload = () => {
    setName(props.bookInfo.name);
    setAuthor(props.bookInfo.author);
    setPublishYear(props.bookInfo.publishYear);
  }

  useEffect(() => {
    toggleReload();
  }, []);

  const toggleModal = () => {
    setModal(!modal);
  }

  const { handleRefresh } = useContext(BookListContext);

  const handleUpdateBook = async() => {
    const newData = {
      name,
      author,
      publishYear
    }
    try {
      await api.put(`/${props.bookInfo._id}`, newData);
      enqueueSnackbar("All Set!", { variant: "success" });
      handleRefresh();
    } catch(error) {
      console.error(error)
      toggleReload();
      enqueueSnackbar("Error! Try again.", { variant: "error" });
    };
  }

  return (
    <div className="p4">
      <button onClick={(toggleModal)}>
        <CiEdit className="text-2xl text-yellow-600"/>
      </button>

      {modal && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-gray-900 bg-opacity-50 text-left">
           <div className="flex flex-col rounded-md rounded-xl p-4 bg-white">
              <div className="flex content-center justify-between">
                <h1 className="text-4xl font-bold text-yellow-600">Edit Book</h1>
                <button onClick={toggleModal}>
                  <IoMdCloseCircleOutline className="text-red-500 w-10 h-10"/>
                </button>
              </div>
              <div className="my-2">
                <label className="text-xl text-gray-500">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border border-slate-600 rounded-md p-2 w-full"
                />
              </div>
              <div className="my-2">
                <label className="text-xl text-gray-500">Author</label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="border border-slate-600 rounded-md p-2 w-full"
                />
              </div>
              <div className="my-2">
                <label className="text-xl text-gray-500">Publish Year</label>
                <input 
                  type="string"
                  value={publishYear}
                  onChange={(e) => setPublishYear(e.target.value)}
                  className="border border-slate-600 rounded-md p-2 w-full"
                />
              </div>
              <button 
                onClick={handleUpdateBook}
                className="bg-green-600 hover:bg-green-400 text-white px-4 py-1 rounded-lg mt-2"
              >
                Save
              </button>
          </div>
        </div>
      )}

    </div>
  )
}

export default EditModal;