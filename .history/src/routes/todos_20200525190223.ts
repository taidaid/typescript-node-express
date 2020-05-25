import { Router } from "express";

import { createTodo } from "../controllers/todos";

const router = Router();

// add todo
router.post("/", createTodo);

// get todos
router.get("/");

// update existing todo
router.patch("/:id");

// delete existing todo
router.delete("/:id");

export default router;
