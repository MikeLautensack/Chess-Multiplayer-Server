// import { io } from "";

export type LobbyType = {
  lobbyName: string;
  username: string;
};

export const lobbyHandler = (socket: any) => {
  console.log(`Socket: ${socket.id}, has connected to the lobby namespace`);
  socket.on("createLobby", (lobby: LobbyType) => {
    try {
      socket.join(lobby.lobbyName);
      console.log(`Socket: ${socket.id}, created lobby: ${lobby.lobbyName}`);
      console.log(`User: ${lobby.username}, created lobby: ${lobby.lobbyName}`);
      socket.emit("lobbyCreated", lobby);
    } catch (error) {
      console.log("Error creating lobby", error);
    }
  });
  socket.on("joinLobby", (lobby: string) => {
    try {
      socket.join(lobby);
      console.log(`Socket: ${socket.id}, joined lobby: ${lobby}`);
    } catch (error) {
      console.log("Error joining lobby", error);
    }
  });
  socket.on("leaveLobby", (lobby: string) => {
    try {
      socket.leave(lobby);
      console.log(`Socket: ${socket.id}, left lobby: ${lobby}`);
    } catch (error) {
      console.log("Error leaving lobby", error);
    }
  });
};
