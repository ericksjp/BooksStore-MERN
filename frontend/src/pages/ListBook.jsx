import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton.jsx";
import api from "../services/api";
import Loader from "../components/Loader.jsx";

const formatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
});

export default function UpdateBook() {
  const [_id, set_Id] = useState("");
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    api.get(`/${id}`).then((response) => {
      set_Id(response.data._id);
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
      publishYear
    }
    api.put(`/${id}`, newData).then((response) => {
      setLoading(false);
      console.log(response);
    }).catch((error) => {
      setLoading(false);
      console.log(error);
    });
  }

  return (
    <div className="w-fit p-5 mx-auto">
      <div className="flex justify-between items-center mb-5">
        <BackButton destination="/" />
        <h1 className="text-4xl font-bold text-green-800">Book Details</h1>
      </div>
      
      { loading 
      ? (<Loader />) 
      : (
        <div className="flex flex-col border-2 border-sky-600 rounded-xl w-[600px] px-4 py-2 mx-auto">
          <p className="text-gray-500 mt-2 italic">{_id}</p>
          <div className="my-1">
            <h3 className="text-2xl text-gray-700 text-30 font-semibold">Name</h3>
            <p className="text-lg italic">{name}</p>
          </div>
          <div className="my-2">
            <h3 className="text-2xl text-gray-700 text-30 font-semibold">Author</h3>
            <p className="text-lg italic">{author}</p>
          </div>
          <div className="my-2">
            <h3 className="text-2xl text-gray-700 text-30 font-semibold">Publish Year</h3>
            <p className="text-lg italic">{publishYear}</p>
          </div>
        </div>
      )}
    </div>
)};