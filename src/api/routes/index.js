import { Router } from "express";
import userRouter from "./user.route.js";
import authRouter from "./auth.route.js";
import swaggerRouter from "./swagger.route.js";
import tweetsRouter from "./Tweets.route.js";

const router = Router();

router.use("/user", userRouter);
router.use("/auth", authRouter);
router.use("/Tweets", tweetsRouter);
router.use("/doc", swaggerRouter);

export default router;
