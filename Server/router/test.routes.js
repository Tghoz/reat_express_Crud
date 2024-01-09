import { Router } from "express";
import {
  getTest,
  getTests,
  updateTests,
  deleteTests,
  createTests,
} from "../controller/test.cotroller.js";

const router = Router();

router.get("/tasks", getTests);

router.get("/tasks/:id", getTest);

router.post("/tasks", createTests);

router.put("/tasks/:id", updateTests);

router.delete("/tasks/:id", deleteTests);

export default router;
