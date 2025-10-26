"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoomDataByCode = exports.postRoomByCode = exports.getAllRooms = void 0;
const prisma_1 = require("../configs/prisma");
const getAllRooms = async (req, res) => {
    try {
        const data = await prisma_1.prisma.rooms.findMany();
        res.status(200).send(data);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Error!");
    }
};
exports.getAllRooms = getAllRooms;
const postRoomByCode = async (req, res) => {
    try {
        const code = req.params.code;
        const email = req.body.email;
        if (!code)
            return res.status(500).send("Error data");
        const checkCode = await prisma_1.prisma.rooms.findUnique({ where: { code } });
        const checkEmail = await prisma_1.prisma.users.findUnique({ where: { email } });
        if (!checkEmail) {
            await prisma_1.prisma.users.create({
                data: {
                    email: email,
                },
            });
        }
        if (!checkCode)
            return res.status(404).send("Data not found");
        res.status(200).send(checkCode);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
exports.postRoomByCode = postRoomByCode;
const getRoomDataByCode = async (req, res) => {
    try {
        const code = req.params.code;
        if (!code)
            return res.status(500).send("error");
        const roomData = await prisma_1.prisma.rooms.findUnique({
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
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
exports.getRoomDataByCode = getRoomDataByCode;
//# sourceMappingURL=room.controller.js.map