import React, { useState } from "react";
import api from "../services/api";
import { useSnackbar } from 'notistack';

import { MdOutlineDelete } from "react-icons/md";
import Loader from "./Loader";

function DeleteModal(props) {
  const [modal, setModal] =  useState(false);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const toggleModal = () => {
    setModal(!modal);
  }

  const handleYesClick = () => {
    setLoading(true);
    setModal();
    api.delete(`/${props.bookInfo._id}`).then((response) => {
      setLoading(false);
      enqueueSnackbar('Book Deleted successfully', { variant: 'success' });
      setModal(!modal);
    }).catch((error) => {
      setLoading(false);
      enqueueSnackbar('Error', { variant: 'error' });
      setModal(!modal);
    });
  };

  return (
    <div className="p4">
      <button onClick={toggleModal}>
        <MdOutlineDelete className="text-2xl text-red-600"/>
      </button>

      {modal && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-gray-900 bg-opacity-50 text-left">
          <div className="relative bg-white rounded px-4 py-5 shadow-md overflow-auto backdrop-filter backdrop-blur-lg max-w-md">

            <p className="text-lg italic text-left text-red-600">Delete</p>
            <p className="text-lg italic">{props.bookInfo.name}</p>
            <h3 className="text-2xl text-gray-700 text-30 font-semibold">Are you sure?</h3>

            <div className="flex gap-5">
              <button 
                onClick={handleYesClick}  
                className="mt-4 inline-flex px-5 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg text-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Yes
              </button>
              <button 
                onClick={toggleModal}
                className="mt-4 inline-flex px-5 py-2 text-sm font-medium text-center text-white bg-blue-100 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default DeleteModal;