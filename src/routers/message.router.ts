import { Router } from "express";
import { postNewMessage, uploadFile } from "../controllers/message.controller";
import { upload } from "../middlewares/upload";

const route = Router();

route.post("/upload-file", upload.single("file"), uploadFile);
route.post("/:id", postNewMessage);

export default route;
