export const chatHandler = (socket) => {
    console.log(`Socket: ${socket.id}, has connected to the chat namespace`);
    socket.on("createChatroom", (chatroom) => {
        try {
            socket.join(chatroom);
            console.log(`Socket: ${socket.id}, created chatroom: ${chatroom}`);
        }
        catch (error) {
            console.log("Error creating chatroom", error);
        }
    });
    socket.on("joinChatroom", (chatroom) => {
        try {
            socket.join(chatroom);
            console.log(`Socket: ${socket.id}, joined chatroom: ${chatroom}`);
        }
        catch (error) {
            console.log("Error joining chatroom", error);
        }
    });
    socket.on("leaveChatroom", (chatroom) => {
        try {
            socket.leave(chatroom);
            console.log(`Socket: ${socket.id}, left chatroom: ${chatroom}`);
        }
        catch (error) {
            console.log("Error leaving chatroom", error);
        }
    });
};
