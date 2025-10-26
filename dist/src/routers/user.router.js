"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const route = (0, express_1.Router)();
route.get("/all", user_controller_1.getAllUsers);
exports.default = route;
//# sourceMappingURL=user.router.js.map