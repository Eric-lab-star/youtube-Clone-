import express from "express";
import morgan from "morgan";

const logger = morgan("dev");
const PORT = 4000;
const app = express();

const handleHome = (req, res) => {
  return res.send("i love middleware");
};

app.use(logger);
app.get("/", handleHome);

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);
