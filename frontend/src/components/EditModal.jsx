import React, { useState, useContext } from "react";
import api from "../services/api";
import { useSnackbar } from 'notistack';

import { MdOutlineDelete } from "react-icons/md";
import Loader from "./Loader";

import { BookListContext } from "../contexts/BookListContext";

function EditModal(props) {
  const [modal, setModal] =  useState(false);
  const [loading, setLoading] = useState(false);
  const [buttonState, setButton] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const toggleModal = () => {
    setModal(!modal);
  }

  // const { handleRefresh } = useContext(BookListContext);

  // const handleYesClick = async () => {
  //   setLoading(true);
  //   try {
  //       await api.delete(`/${props.bookInfo._id}`);
  //       setLoading(false);
  //       enqueueSnackbar('Deleted', { variant: 'success', autoHideDuration: 2000 });
  //       handleRefresh();
  //       toggleModal();
  //   }
  //   catch(error) {
  //     setLoading(false);
  //     enqueueSnackbar('Error', { variant: 'error' });
  //   }
  // }

  return (
    <div className="p4">
      <button onClick={(toggleModal)}>
        kjahsdakjhsdkjsadk
      </button>

      {modal && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-gray-900 bg-opacity-50 text-left">
           <div className="flex flex-col border-sky-600 rounded-md rounded-xl w-[600px] p-4 mx-auto bg-white">
              <h1 className="text-4xl font-bold text-yellow-600">Edit Book</h1>
              <div className="my-2">
                <label className="text-xl text-gray-500">Name</label>
                <input
                  type="text"
                  value="erick"
                  onChange={(e) => setName(e.target.value)}
                  className="border border-slate-600 rounded-md p-2 w-full"
                />
              </div>
              <div className="my-2">
                <label className="text-xl text-gray-500">Author</label>
                <input
                  type="text"
                  value="erick"
                  onChange={(e) => setAuthor(e.target.value)}
                  className="border border-slate-600 rounded-md p-2 w-full"
                />
              </div>
              <div className="my-2">
                <label className="text-xl text-gray-500">Publish Year</label>
                <input 
                  type="string"
                  value="erick"
                  onChange={(e) => setPublishYear(e.target.value)}
                  className="border border-slate-600 rounded-md p-2 w-full"
                />
              </div>
              <button 
                // onClick={handleUpdateBook}
                className="bg-sky-800 hover:bg-sky-600 text-white px-4 py-1 rounded-lg mt-2"
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