import { ClassModel } from "../models/classModel";

export const createClassRepo = (data: { name: string }) => {
  return ClassModel.create(data);
};
