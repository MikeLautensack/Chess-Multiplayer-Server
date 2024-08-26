import express, { Request, Response } from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import { mainHandler } from "./mainHandler";
import { lobbyHandler } from "./lobbyHandler";
import { gameroomHandler } from "./gameroomHandler";
import { chatHandler } from "./chatroomHandler";
// import type {
//   ClientToServerEvents,
//   InterServerEvents,
//   ServerToClientEvents,
//   SocketData,
// } from "./types";

const app = express();
const server = createServer(app);
export const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});
const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

server.listen(port, () => {
  console.log(`Chess multiplayer server listening on port ${port}`);
});

//  Main namespaces
io.on("connection", mainHandler);

// Lobby namespace
io.of("/lobby").on("connection", lobbyHandler);
