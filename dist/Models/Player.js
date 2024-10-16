import { v4 as uuidv4 } from "uuid";
class Player {
    username;
    playerId;
    constructor(username) {
        this.username = username;
        this.playerId = uuidv4();
    }
    getUsername() {
        return this.username;
    }
    getPlayerId() {
        return this.playerId;
    }
}
export default Player;
