import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globaRouters";
import videoRouter from "./routers/videoRouters";
import userRouter from "./routers/userRouters";

const logger = morgan("dev");
const PORT = 4000;
const app = express();

//middlewares
app.use(logger);

//routers
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

//app
app.set("views", process.cwd() + "/src/views");
app.set("view engine", "pug");
const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);
