import express from "express";
import {
  remove,
  edit,
  see,
  logout,
  startGit,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/delete", remove);
userRouter.get("/edit", edit);
userRouter.get(":id", see);
userRouter.get("/logout", logout);
userRouter.get("/github/start", startGit);
export default userRouter;
