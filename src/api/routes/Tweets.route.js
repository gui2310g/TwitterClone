import { Router } from "express";
const router = Router()

import TweetsController from "../controllers/Tweets.controller.js"
import { authMiddleware } from "../middlewares/auth.middlewares.js";

router.post("/create", authMiddleware, TweetsController.CreateTweetsController)
router.get("/", TweetsController.FindAllTweetsController)
router.get("/top", TweetsController.topTweetsController)
/* router.get("/search", searchByTitle); */
router.get("/byUserId/:id", authMiddleware, TweetsController.FindTweetByUserController)
router.get("/byIdTweets/:id", authMiddleware, TweetsController.FindTweetByIdController)
router.patch("/update/:id", authMiddleware, TweetsController.UpdateTweetController)
router.delete("/delete/:id", authMiddleware, TweetsController.DeleteTweetsController)
router.patch("/like/:id", authMiddleware, TweetsController.LikeTweetsController)
router.patch("/comments/:id", authMiddleware, TweetsController.addCommentsController)
router.patch("/comments/:idTweets/:idComment", authMiddleware, TweetsController.deleteCommentsController)


export default router;