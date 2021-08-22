import express from "express";
const PORT = 4000;
const app = express();

const handleHome = (req, res) => {
  return res.send("i love middleware");
};

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("not allowed");
  }
  console.log("Your are allowed");
  next();
};
app.use(privateMiddleware);
app.use(logger);
app.get("/", handleHome);

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);
