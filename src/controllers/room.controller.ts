import { Request, Response } from "express";
import { prisma } from "../configs/prisma";

export const getAllRooms = async (req: Request, res: Response) => {
  try {
    const data = await prisma.rooms.findMany();
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error!");
  }
};

export const postRoomByCode = async (req: Request, res: Response) => {
  try {
    const code = req.params.code;
    const email = req.body.email;
    if (!code) return res.status(500).send("Error data");
    const checkCode = await prisma.rooms.findUnique({ where: { code } });
    const checkEmail = await prisma.users.findUnique({ where: { email } });
    if (!checkEmail) {
      await prisma.users.create({
        data: {
          email: email,
        },
      });
    }
    if (!checkCode) return res.status(404).send("Data not found");
    res.status(200).send(checkCode);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const getRoomDataByCode = async (req: Request, res: Response) => {
  try {
    const code = req.params.code;
    if (!code) return res.status(500).send("error");
    const roomData = await prisma.rooms.findUnique({
      where: { code: code },
      include: {
        product: {
          select: {
            name: true,
          },
        },
        Comments: {
          include: {
            user: {
              select: {
                id: true,
                email: true,
              },
            },
          },
          omit: {
            id: true,
            user_id: true,
            room_id: true,
          },
        },
        Room_Details: {
          select: {
            user: true,
          },
        },
      },
    });
    console.log(roomData);
    res.status(200).send(roomData);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
