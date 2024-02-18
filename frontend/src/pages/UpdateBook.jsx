import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton.jsx";
import api from "../services/api";
import Loader from "../components/Loader.jsx";

import { SnackbarProvider, enqueueSnackbar } from "notistack";

export default function UpdateBook() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState();
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    api.get(`/${id}`).then((response) => {
      setName(response.data.name);
      setAuthor(response.data.author);
      setPublishYear(response.data.publishYear);
      setLoading(false);
    }).catch((error) => {
      console.log(error);
      setLoading(false);
    });
  }, []);

  const handleUpdateBook = () => {
    const newData = {
      name,
      author,
      publishYear: parseInt(publishYear)
    }
    api.put(`/${id}`, newData).then((response) => {
      setLoading(false);
      enqueueSnackbar("All Set!", { variant: "success" });
    }).catch((error) => {
      setLoading(false);
      console.log(error);
      enqueueSnackbar("Error! Try again.", { variant: "error" });
    });
  }

  return (
    <SnackbarProvider>
      <div className="w-fit p-5 mx-auto">
        <div className="flex justify-between items-center mb-5">
          <BackButton destination="/" />
          <h1 className="text-4xl font-bold text-yellow-600">Edit Book</h1>
        </div>
        
        { loading 
        ? (<Loader />) 
        : (
            <div className="flex flex-col border-2 border-sky-600 rounded-xl w-[600px] p-4 pt-1 mx-auto">
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
                  type="number"
                  value={publishYear}
                  onChange={(e) => setPublishYear(e.target.value)}
                  className="border border-slate-600 rounded-md p-2 w-full"
                />
              </div>
              <button 
                onClick={handleUpdateBook}
                className="bg-sky-800 hover:bg-sky-600 text-white px-4 py-1 rounded-lg mt-2"
              >
                Save
              </button>
            </div>
          )}
        </div>
    </SnackbarProvider>
)};