import { createClassRepo } from "../repositories/classRepository";

export const createClassService = async (data: any) => {
  return await createClassRepo(data);
};
