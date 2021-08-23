//mongo db와 연결
import "./db";
import "./models/Video";
// express 서버와 연결
import express from "express";
import morgan from "morgan";
//router와 연결 시키기
import globalRouter from "./routers/globaRouters";
import videoRouter from "./routers/videoRouters";
import userRouter from "./routers/userRouters";

const logger = morgan("dev");
const PORT = 4000;
const app = express();

//middlewares 만들어 주기
app.use(logger);
app.use(express.urlencoded({ extended: true }));
//router 함수
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

//app
app.set("views", process.cwd() + "/src/views");
app.set("view engine", "pug");
const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);
