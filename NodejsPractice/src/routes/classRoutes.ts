import { Router } from "express";
import { createClass } from "../controllers/classController";

const router = Router();

router.post("/", createClass);

export default router;
