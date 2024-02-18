import React, { useState } from "react";
import { useSnackbar } from "notistack";
import api from "../services/api";

import { MdOutlineDelete } from "react-icons/md";

const ModalComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleYesClick = () => {
    setModalOpen(false);
    api.get("/").then((response) => {
      console.log(response.data);
      enqueueSnackbar("Ação confirmada!", { variant: "success" });
    });
  };

  const handleNoClick = () => {
    setModalOpen(false);
    enqueueSnackbar("Ação cancelada.", { variant: "error" });
  };

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>
        <MdOutlineDelete className="text-2xl text-red-600"/>
      </button>

      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-gray-900 bg-opacity-50 text-left">
          <div className="relative bg-white rounded px-4 py-5 shadow-md overflow-auto backdrop-filter backdrop-blur-lg max-w-md">
            <h3 className="text-2xl text-gray-700 text-30 font-semibold">Confirmação</h3>
            <p className="text-lg mb-4">Deseja realmente realizar esta ação?</p>
            <div className="flex gap-5">
              <button
                onClick={handleYesClick}
                className="mt-4 inline-flex px-5 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg text-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sim
              </button>
              <button
                onClick={handleNoClick}
                className="mt-4 inline-flex px-5 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Não
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalComponent;
