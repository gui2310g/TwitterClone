import express from "express"
import userController from "../controllers/user.controller.js"
import {validId} from "../middlewares/user.global.middlewares.js"

const router = express.Router()

router.post("/create", userController.CreateUserController)
router.get("/", userController.FindAllUsersController)
router.get("/findById/:id", validId, userController.FindUserByIdController)
router.patch("/update/:id", validId, userController.UpdateUserController)

export default router;