import React, { useState, useContext, useEffect } from "react";
import UpdateButton from "./UpdateButton";

function EditComponent(props) {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");

  const toggleReload = () => {
    setName(props.book.name);
    setAuthor(props.book.author);
    setPublishYear(props.book.publishYear);
  }

  console.log(props.toggle);
  console.log(props.book)

  useEffect(() => {
    toggleReload();
  }, []);

  return (
    <>
      <span className="text-gray-500 mt-2 italic">{props.book._id}</span>

      <div className="my-1 flex flex-col w-96">
        <label className="text-xl text-gray-700 text-30 font-semibold">
          Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-slate-600 rounded-md p-1 w-full text-lg italic"
        />
      </div>
      <div className="my-1 flex flex-col w-96">
        <label className="text-xl text-gray-700 text-30 font-semibold">
          Author
        </label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="border border-slate-500 rounded-md p-1 w-full text-lg italic"
        />
      </div>
      <div className="my-1 flex flex-col w-96">
        <label className="text-xl text-gray-700 text-30 font-semibold">
          Publish Year
        </label>
        <input
          type="string"
          value={publishYear}
          onChange={(e) => setPublishYear(e.target.value)}
          className="border border-slate-600 rounded-md p-1 w-full text-lg italic"
        />
      </div>
      <UpdateButton bookId={props.book._id} values={{name, author, publishYear}} toggle={props.toggle}/>
    </>
  );
}

export default EditComponent;
