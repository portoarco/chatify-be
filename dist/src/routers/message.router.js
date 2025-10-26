"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const message_controller_1 = require("../controllers/message.controller");
const upload_1 = require("../middlewares/upload");
const route = (0, express_1.Router)();
route.post("/upload-file", upload_1.upload.single("file"), message_controller_1.uploadFile);
route.post("/:id", message_controller_1.postNewMessage);
exports.default = route;
//# sourceMappingURL=message.router.js.map