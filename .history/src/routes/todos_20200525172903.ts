import { Router } from "express";

const router = Router();

// add todo
router.post("/");

// get todos
router.get("/");

// update existing todo
router.patch("/:id");

// delete existing todo
router.delete("/:id");

export default router;
