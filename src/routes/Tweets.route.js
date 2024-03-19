import { Router } from "express";
const router = Router()

import { 
    create, 
    findAll, 
    topTweets, 
    findById, 
    searchByTitle,
    byUser
} from "../controllers/Tweets.controller.js"
import { authMiddleware } from "../middlewares/auth.middlewares.js";

router.post("/", authMiddleware, create)
router.get("/", findAll)
router.get("/top", topTweets)
router.get("/search", searchByTitle);
router.get("/byUser", authMiddleware, byUser)
router.get("/:id", authMiddleware, findById)

export default router;