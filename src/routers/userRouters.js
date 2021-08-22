import express from "express";
import videoRouter from "./videoRouters";
const userRouter = express.Router();
const handleuser = (req, res) => res.send("edit user");

userRouter.get("/edit", handleuser);

export default userRouter;
