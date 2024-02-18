import { Router } from "express";
import { createBook, deleteBook, getAllBooks, getBook, updateBook } from "../controllers/books.mjs"

const router = Router();

router.get("/", getAllBooks);;

router.get("/:id", getBook);

router.post("/", createBook);

router.put("/:id", updateBook);

// router.patch("/:id", (req, res) => {
//   res.status(200).send({msg: "hello patch"});
// });

router.delete("/:id", deleteBook);

export default router;