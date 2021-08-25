//mongo db와 연결
import "./db";
import "./models/Video";
import "./models/User";
//서버 연결
import app from "./server";

const PORT = 4000;
const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);
