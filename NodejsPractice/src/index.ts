import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
console.log("i am cors", cors());
app.use(cors());

app.post("/", (req, res, next) => {
  console.log("i am the request", req.method);
  res.send("i am a middleware 1");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
