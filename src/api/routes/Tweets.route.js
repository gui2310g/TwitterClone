import { Router } from "express";
const router = Router()

import TweetsController from "../controllers/Tweets.controller.js"
import { authMiddleware } from "../middlewares/auth.middlewares.js";
import { validId } from "../middlewares/user.global.middlewares.js";

router.get("/", TweetsController.FindAllTweetsController)
router.get("/top", TweetsController.topTweetsController)
router.get("/search", TweetsController.SearchByTextController);

router.use(authMiddleware)
router.post("/create",  TweetsController.CreateTweetsController)

router.use(validId)
router.get("/byUserId/:id", TweetsController.FindTweetByUserController)
router.get("/byIdTweets/:id", TweetsController.FindTweetByIdController)
router.patch("/update/:id", TweetsController.UpdateTweetController)
router.delete("/delete/:id", TweetsController.DeleteTweetsController)
router.patch("/like/:id", TweetsController.LikeTweetsController)
router.patch("/comments/:id", TweetsController.addCommentsController)
router.patch("/comments/:idTweets/:idComment", TweetsController.deleteCommentsController)


export default router;