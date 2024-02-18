import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ListBook from "./pages/ListBook.jsx";
import CreateBook from "./pages/CreateBook.jsx";
import UpdateBook from "./pages/UpdateBook.jsx";

import "./index.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/details/:id" element={<ListBook />} />
      <Route path="/books/edit/:id" element={<UpdateBook />} />
    </Routes>
  );
}

// import { SnackbarProvider, enqueueSnackbar } from 'notistack';

// export default function App () {
//   return (
//     <div>
//       <SnackbarProvider />
//       <button onClick={() => enqueueSnackbar('That was easy!')}>Show snackbar</button>
//     </div>
//   );
// };