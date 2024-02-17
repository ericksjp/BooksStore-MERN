import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).send({msg: "hello get"});
});

router.get("/:id", (req, res) => {
  res.status(200).send({msg: "hello get id"});
});

router.post("/", (req, res) => {
  res.status(200).send({msg: "hello post"});
});

router.put("/:id", (req, res) => {
  res.status(200).send({msg: "hello put"});
});

router.patch("/:id", (req, res) => {
  res.status(200).send({msg: "hello patch"});
});

router.delete("/:id", (req, res) => {
  res.status(200).send({msg: "hello delete"});
});

export default router;