import { Response } from "express";

export const sendErrorsRes = (
  res: Response,
  statusCode: number,
  message: string,
) => {
  return res.status(statusCode).json({ message });
};
