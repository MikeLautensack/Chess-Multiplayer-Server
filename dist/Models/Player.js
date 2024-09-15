class Player {
    username;
    playerId;
    constructor(username, playerId) {
        this.username = username;
        this.playerId = playerId;
    }
    getUsername() {
        return this.username;
    }
    getPlayerId() {
        return this.playerId;
    }
}
export default Player;
