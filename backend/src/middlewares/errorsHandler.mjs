import { MyError } from "../error/error.js";

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof MyError) {
    return res.status(401).send({msg: err.message});
  }

  if (err.message === "ValidationError")
    return res.status(400).send({msg: err.message});
  if (err.message === "CastError")
    return res.status(404).send({msg: "Book not found"});

  return res.status(500).send({msg: err.message});
};

export default errorHandlerMiddleware;