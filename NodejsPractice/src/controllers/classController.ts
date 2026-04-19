import { Request, Response } from "express";
import { createClassService } from "../services/classService";

export const createClass = async (req: Request, res: Response) => {
  try {
    const newClass = await createClassService(req.body);
    res.status(201).json(newClass);
  } catch (error) {
    console.log((error as any).message);

    res.status(500).json({
      message: "Error creating class",
      error: error instanceof Error ? error.message : error,
    });
  }
};
