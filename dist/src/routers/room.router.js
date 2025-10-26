"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const room_controller_1 = require("../controllers/room.controller");
const route = (0, express_1.Router)();
route.get("/all", room_controller_1.getAllRooms);
route.get("/room-data/:code", room_controller_1.getRoomDataByCode);
route.post("/:code", room_controller_1.postRoomByCode);
exports.default = route;
//# sourceMappingURL=room.router.js.map