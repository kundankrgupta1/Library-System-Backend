import express from "express";
import userController from "../controllers/user.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
const userRouter = express.Router();

userRouter.post("/reg", userController.userRegister);
userRouter.post("/login", userController.userLogin);
userRouter.get("/profile", authMiddleware, userController.getProfile);
userRouter.delete("/remove/:id", authMiddleware, userController.removeUser);

export default userRouter;