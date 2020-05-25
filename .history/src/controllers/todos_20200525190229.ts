import { RequestHandler } from "express";

import { Todo } from "../models/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo: Todo = new Todo(Math.random().toString(), text);
};
