// express 서버와 연결
import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
//router와 연결 시키기
import rootRouter from "./routers/rootRouters";
import videoRouter from "./routers/videoRouters";
import userRouter from "./routers/userRouters";
import { localsMiddleware } from "./middleware";

const logger = morgan("dev");

const app = express();
//app
app.set("views", process.cwd() + "/src/views");
app.set("view engine", "pug");
//middlewares 만들어 주기
app.use(logger);
app.use(express.urlencoded({ extended: true }));
//session 만들어서 localmiddleware를 사용 할 수 있게 되었다.
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 20000,
    },
    //sessions을 db에 저장 하고 싶으면 monogo store 을 사용한다
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  })
);

app.use(localsMiddleware);

//router 함수
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;
