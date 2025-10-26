"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const user_router_1 = __importDefault(require("./routers/user.router"));
const room_router_1 = __importDefault(require("./routers/room.router"));
const message_router_1 = __importDefault(require("./routers/message.router"));
const cors_1 = __importDefault(require("cors"));
const PORT = process.env.PORT || "5005";
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.status(200).send("<h1>Hello from Back End Chatify!</h1>");
});
// ROUTER
app.use("/api/user", user_router_1.default);
app.use("/api/room", room_router_1.default);
app.use("/api/message", message_router_1.default);
app.listen(PORT, () => {
    console.info(`API is running at http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map