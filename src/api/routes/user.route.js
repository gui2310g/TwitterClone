import express from "express"
import userController from "../controllers/user.controller.js"
import { authMiddleware } from "../middlewares/auth.middlewares.js";

import {validId} from "../middlewares/user.global.middlewares.js"

const router = express.Router()

router.post("/create", userController.CreateUserController)
router.get("/search", userController.SearchByUsernameController);
router.get("/", userController.FindAllUsersController)

router.use(authMiddleware, validId)

router.get("/findById", userController.FindUserByIdController)
router.patch("/update", userController.UpdateUserController)

export default router;