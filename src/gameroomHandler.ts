export const gameroomHandler = (socket: any) => {
  console.log(`Socket: ${socket.id}, has connected to the gameroom namespace`);
  socket.on("createGameroom", (gameroom: string) => {
    try {
      socket.join(gameroom);
      console.log(`Socket: ${socket.id}, created gameroom: ${gameroom}`);
    } catch (error) {
      console.log("Error creating gameroom", error);
    }
  });
  socket.on("joinGameroom", (gameroom: string) => {
    try {
      socket.join(gameroom);
      console.log(`Socket: ${socket.id}, joined gameroom: ${gameroom}`);
    } catch (error) {
      console.log("Error joining gameroom", error);
    }
  });
  socket.on("leaveGameroom", (gameroom: string) => {
    try {
      socket.leave(gameroom);
      console.log(`Socket: ${socket.id}, left gameroom: ${gameroom}`);
    } catch (error) {
      console.log("Error leaving gameroom", error);
    }
  });
};
