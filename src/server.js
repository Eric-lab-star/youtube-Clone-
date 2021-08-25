// express 서버와 연결
import express from "express";
import morgan from "morgan";
import session from "express-session";
//router와 연결 시키기
import rootRouter from "./routers/rootRouters";
import videoRouter from "./routers/videoRouters";
import userRouter from "./routers/userRouters";

const logger = morgan("dev");

const app = express();
//app
app.set("views", process.cwd() + "/src/views");
app.set("view engine", "pug");
//middlewares 만들어 주기
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "Hello",
    resave: true,
    saveUninitialized: true,
  })
);
//router 함수
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;
