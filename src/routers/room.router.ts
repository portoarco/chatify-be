import { Router } from "express";
import {
  getAllRooms,
  getRoomDataByCode,
  postRoomByCode,
} from "../controllers/room.controller";

const route = Router();

route.get("/all", getAllRooms);
route.get("/room-data/:code", getRoomDataByCode);
route.post("/:code", postRoomByCode);

export default route;
