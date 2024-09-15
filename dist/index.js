import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
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
app.get("/", (req, res) => {
    res.send("Hello World!");
});
server.listen(port, () => {
    console.log(`Chess multiplayer server listening on port ${port}`);
});
//  Main namespaces
io.on("connection", (socket) => { });
