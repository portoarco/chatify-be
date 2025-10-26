import { Request, Response } from "express";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).send("Error!");
  }
};
