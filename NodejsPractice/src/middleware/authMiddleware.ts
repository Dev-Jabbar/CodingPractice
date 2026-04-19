import { Request, Response, NextFunction } from "express";
import { verifyToken, TokenPayload } from "../utils/jwt";

// Extend Express Request to include user
declare module "express-serve-static-core" {
  interface Request {
    user?: TokenPayload;
  }
}

// Middleware factory: roles optional
export const protect = (roles?: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    console.log("I am authHeader", authHeader);
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No token provided" });
    }

    const token = authHeader.split(" ")[1];

    console.log("i am token", token);

    try {
      const decoded = verifyToken(token);
      req.user = decoded;

      // Role-based check if roles are provided
      if (roles && !roles.includes(req.user.role)) {
        return res
          .status(403)
          .json({ message: "Forbidden: Insufficient role" });
      }

      next();
    } catch (err) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
  };
};
