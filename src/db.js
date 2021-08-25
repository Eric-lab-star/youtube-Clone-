import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/CRUDRecap", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;
const handleOpen = () => console.log("✅ Connectec to DB");
const handleError = () => console.log("❌ DB Error", error);
db.on("error", handleError);
db.once("open", handleOpen);
