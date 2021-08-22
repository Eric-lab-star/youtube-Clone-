import express from "express";
import morgan from "morgan";

const logger = morgan("dev");
const PORT = 4000;
const app = express();
app.use(logger);

const globalRouter = express.Router();
const handleHome = (req, res) => res.send("Home");
globalRouter.get("/", handleHome);

const userRouter = express.Router();
const handleuser = (req, res) => res.send("edit user");
userRouter.get("/edit", handleuser);

const videoRouter = express.Router();
const handleVideo = (req, res) => res.send("Watch video");
videoRouter.get("/watch", handleVideo);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);
