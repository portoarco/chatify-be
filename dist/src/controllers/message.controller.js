"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = exports.postNewMessage = void 0;
const prisma_1 = require("../configs/prisma");
const cloudinary_1 = __importDefault(require("../configs/cloudinary"));
const postNewMessage = async (req, res) => {
    try {
        const room_id = req.params.id?.trim().toString();
        const type = req.body.data.type;
        const message = req.body.data.message.trim().toString();
        const email = req.body.data.user.email.trim().toString();
        if (!type || !message || !email) {
            return res.status(500).send("Post new comment error!");
        }
        // find user_id based on email
        const findUserbyEmail = await prisma_1.prisma.users.findUnique({
            where: { email: email },
        });
        const user_id = findUserbyEmail?.id;
        // create new comment
        await prisma_1.prisma.comments.create({
            data: {
                room_id: room_id,
                user_id: user_id,
                type: type,
                message,
            },
        });
        res.status(200).send("Create new comment success!");
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Create new comment error");
    }
};
exports.postNewMessage = postNewMessage;
const uploadFile = async (req, res) => {
    try {
        const userEmail = req.body.userEmail;
        const roomId = req.body.roomId;
        if (!req.file)
            return res.status(400).send("No file uploaded");
        const result = await new Promise((resolve, reject) => {
            cloudinary_1.default.uploader
                .upload_stream({
                folder: "file",
                resource_type: "auto",
            }, (error, uploaded) => {
                if (error)
                    reject(error);
                else
                    resolve(uploaded);
            })
                .end(req.file?.buffer);
        });
        //
        // find user_id based on email
        const findUserbyEmail = await prisma_1.prisma.users.findUnique({
            where: { email: userEmail },
        });
        const user_id = findUserbyEmail?.id;
        const uploadData = await prisma_1.prisma.comments.create({
            data: {
                message: result.secure_url,
                user_id: user_id,
                room_id: roomId,
                type: "FILE",
            },
        });
        res.status(200).json(uploadData);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
exports.uploadFile = uploadFile;
//# sourceMappingURL=message.controller.js.map