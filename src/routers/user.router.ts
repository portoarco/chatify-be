import { Router } from "express";
import { getAllUsers } from "../controllers/user.controller";

const route = Router();

route.get("/all", getAllUsers);

export default route;
