import { Router } from "express";
const router = Router()

import { 
    create, 
    findAll, 
    topTweets, 
    findById, 
    searchByTitle,
    byUser,
    update,
    erase,
    likeTweets,
    addComments,
    deleteComments
} from "../controllers/Tweets.controller.js"
import { authMiddleware } from "../middlewares/auth.middlewares.js";

router.post("/", authMiddleware, create)
router.get("/", findAll)
router.get("/top", topTweets)
router.get("/search", searchByTitle);
router.get("/byUser", authMiddleware, byUser)
router.get("/:id", authMiddleware, findById)
router.patch("/:id", authMiddleware, update)
router.delete("/:id", authMiddleware, erase)
router.patch("/like/:id", authMiddleware, likeTweets)
router.patch("/comments/:id", authMiddleware, addComments)
router.patch("/comments/:idTweets/:idComment", authMiddleware, deleteComments)


export default router;