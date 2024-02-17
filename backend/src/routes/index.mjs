import { Router } from "express";
import booksRouter from "./books.mjs";

const router = Router();

router.use("/api/books", booksRouter);

export default router;