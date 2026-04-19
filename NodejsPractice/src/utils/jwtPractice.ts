import jwt from "jsonwebtoken";
import { JWT_CONFIG } from "../config/jwtConfig";

const payload = {
  id: "123",
  role: "trainer",
  email: "test@example.com",
};

const token = jwt.sign(
  payload,
  JWT_CONFIG.secret, // ✅ plain string is VALID
  {
    expiresIn: JWT_CONFIG.expiresIn, // ✅ string like "7d" is VALID at runtime
  } as any
);
const token2 = "hsbjsbjjs";
console.log("here is the token", token);

const decoded = jwt.verify(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMyIsInJvbGUiOiJ0cmFpbmVyIiwiZW1haWwiOiJ0ZXN0QGV4YW1wbGUuY29tIiwiaWF0IjoxNzY3OTg1NTQyLCJleHAiOjE3Njg1OTAzNDJ9.pmB5IzOfcVgr65EhtPmxPcxIc6SXxbSkOA7x1R7Dz2g",
  JWT_CONFIG.secret
);

console.log("DECODED HEHE", decoded);
