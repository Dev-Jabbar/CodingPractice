// index.js
import express from "express";
import { connectDB } from "./config/db";
import dotenv from "dotenv";
import classRoutes from "./routes/classRoutes";
import testRoutes from "./routes/testRoutes";

// import "./utils/jwtPractice";

import "./utils/jwt";

const app = express();

{
  /** 
   
  app.get("/", (req, res) => {
    res.send("Hello, Node.js i am jabbar");
  });

  app.post("/data", (req, res) => {
    console.log("Request body:", req.body); // logs JSON data sent from browser
    res.send("Data received");
  });

  app.use((req, res, next) => {
    console.log(`${req.method} `); // logs GET /, POST /api, etc.
    next();
  });

  app.post("/user", (req, res) => {
    console.log(req.body);
  });

  **/
}

dotenv.config();

app.use(express.json());

connectDB();

// 👉 NEW: class routes (controller → service → repository → model)
app.use("/api/classes", classRoutes);

app.use("/api/test", testRoutes);

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

const PORT = 2000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
