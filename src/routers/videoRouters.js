import express from "express";

const videoRouter = express.Router();

const handleVideo = (req, res) => res.send("Watch video");

videoRouter.get("/watch", handleVideo);

export default videoRouter;
