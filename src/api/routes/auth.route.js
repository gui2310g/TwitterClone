import { Router } from "express";
const router = Router()

import authController from "../controllers/auth.controller.js"
router.post("/login", authController.LoginController)

export default router;