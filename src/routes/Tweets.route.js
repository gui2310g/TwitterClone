import { Router } from "express";
const router = Router()

import { create, findAll } from "../controllers/Tweets.controller.js"
import { authMiddleware } from "../middlewares/auth.middlewares.js";

router.post("/", authMiddleware, create)
router.get("/", findAll)

export default router;