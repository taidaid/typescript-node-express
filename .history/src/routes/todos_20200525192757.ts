import { Router } from "express";

import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} from "../controllers/todos";

const router = Router();

// add todo
router.post("/", createTodo);

// get todos
router.get("/", getTodos);

// update existing todo
router.patch("/:id", updateTodo);

// delete existing todo
router.delete("/:id", deleteTodo);

export default router;
