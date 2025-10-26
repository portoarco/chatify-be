import dotenv from "dotenv";
dotenv.config();
import express, { Application, Request, Response } from "express";
import userRouters from "./routers/user.router";
import roomRouters from "./routers/room.router";
import messageRouters from "./routers/message.router";
import cors from "cors";

const PORT: string = process.env.PORT || "5005";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.status(200).send("<h1>Hello from Back End Chatify!</h1>");
});
// ROUTER
app.use("/api/user", userRouters);
app.use("/api/room", roomRouters);
app.use("/api/message", messageRouters);

app.listen(PORT, () => {
  console.info(`API is running at http://localhost:${PORT}`);
});

export default app;
