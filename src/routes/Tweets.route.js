import { Router } from "express";
const router = Router()

import { create, findAll, topTweets, findById } from "../controllers/Tweets.controller.js"
import { authMiddleware } from "../middlewares/auth.middlewares.js";

router.post("/", authMiddleware, create)
router.get("/", findAll)
router.get("/top", topTweets)
router.get("/:id", findById)

export default router;