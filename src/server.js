import express from "express";
const PORT = 4000;
const app = express();

const hanleHome = (req, res) => {
  return res.send("<h1>I still love you</h1>");
};
const hanleLogin = (req, res) => {
  return res.send("i am login");
};

app.get("/", hanleHome);
app.get("/login", hanleLogin);

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
