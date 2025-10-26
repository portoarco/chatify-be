import { Request, Response } from "express";
import { prisma } from "../configs/prisma";
import cloudinary from "../configs/cloudinary";

export const postNewMessage = async (req: Request, res: Response) => {
  try {
    const room_id = req.params.id?.trim().toString();
    const type = req.body.data.type;
    const message = req.body.data.message.trim().toString();
    const email = req.body.data.user.email.trim().toString();
    if (!type || !message || !email) {
      return res.status(500).send("Post new comment error!");
    }
    // find user_id based on email
    const findUserbyEmail = await prisma.users.findUnique({
      where: { email: email },
    });
    const user_id = findUserbyEmail?.id;
    // create new comment
    await prisma.comments.create({
      data: {
        room_id: room_id!,
        user_id: user_id!,
        type: type!,
        message,
      },
    });
    res.status(200).send("Create new comment success!");
  } catch (error) {
    console.log(error);
    res.status(500).send("Create new comment error");
  }
};

export const uploadFile = async (req: Request, res: Response) => {
  try {
    const userEmail = req.body.userEmail;
    const roomId = req.body.roomId;
    if (!req.file) return res.status(400).send("No file uploaded");
    const result = await new Promise<any>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "file",
            resource_type: "auto",
          },
          (error, uploaded) => {
            if (error) reject(error);
            else resolve(uploaded);
          }
        )
        .end(req.file?.buffer);
    });
    //
    // find user_id based on email
    const findUserbyEmail = await prisma.users.findUnique({
      where: { email: userEmail },
    });
    const user_id = findUserbyEmail?.id;

    const uploadData = await prisma.comments.create({
      data: {
        message: result.secure_url,
        user_id: user_id!,
        room_id: roomId,
        type: "FILE",
      },
    });
    res.status(200).json(uploadData);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
