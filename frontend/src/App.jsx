import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CreateBook from "./pages/CreateBook.jsx";

import { BookListProvider } from './contexts/BookListContext.jsx';

import "./index.css";

export default function App() {
  return (
    <BookListProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/create" element={<CreateBook />} />
      </Routes>
      </BookListProvider>
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