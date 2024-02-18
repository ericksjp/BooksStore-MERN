import axios from "axios";
import api from "./api";

function deleteBook(id) {
  return api.delete(`/${id}`).then((response) => {
    if (response.status === 201) return true;
    return false;
  }).catch((error) => {
    return false;
  });
}