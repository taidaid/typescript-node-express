"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var todos_1 = require("../controllers/todos");
var router = express_1.Router();
// add todo
router.post("/", todos_1.createTodo);
// get todos
router.get("/", todos_1.getTodos);
// update existing todo
router.patch("/:id", todos_1.updateTodo);
// delete existing todo
router.delete("/:id", todos_1.deleteTodo);
exports.default = router;
