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

io.of("/lobby").adapter.on("create-room", (room: string) => {
  console.log(`Lobby: ${room}, was created`);
});

io.of("/lobby").adapter.on("join-room", (room: string) => {
  console.log(`A new client joined lobby: ${room}`);
});

io.of("/lobby").adapter.on("leave-room", (room: string) => {
  console.log(`A client left lobby: ${room}`);
});

io.of("/lobby").adapter.on("delete-room", (room: string) => {
  console.log(`Lobby: ${room}, has been deleted`);
});

// Gameroom namespace
io.of("/gameroom").on("connection", gameroomHandler);

io.of("/gameroom").adapter.on("create-room", (room: string) => {
  console.log(`Gameroom: ${room}, was created`);
});

io.of("/gameroom").adapter.on("join-room", (room: string) => {
  console.log(`A new client joined gameroom: ${room}`);
});

io.of("/gameroom").adapter.on("leave-room", (room: string) => {
  console.log(`A client left gameroom: ${room}`);
});

io.of("/gameroom").adapter.on("delete-room", (room: string) => {
  console.log(`Gameroom: ${room}, has been deleted`);
});

// Chatroom namespace
io.of("/chat").on("connection", chatHandler);

io.of("/chat").adapter.on("create-room", (room: string) => {
  console.log(`Chatroom: ${room}, was created`);
});

io.of("/chat").adapter.on("join-room", (room: string) => {
  console.log(`A new client joined chatroom: ${room}`);
});

io.of("/chat").adapter.on("leave-room", (room: string) => {
  console.log(`A client left chatroom: ${room}`);
});

io.of("/chat").adapter.on("delete-room", (room: string) => {
  console.log(`Chatroom: ${room}, has been deleted`);
});
