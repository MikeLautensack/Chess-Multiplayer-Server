class Lobby {
    lobbyId;
    lobbyName;
    players;
    games;
    constructor(lobbyId, lobbyName, players, games) {
        this.lobbyId = lobbyId;
        this.lobbyName = lobbyName;
        this.players = players;
        this.games = games;
    }
    getLobbyId() {
        return this.lobbyId;
    }
    getLobbyName() {
        return this.lobbyName;
    }
    getPlayers() {
        return this.players;
    }
    getGames() {
        return this.games;
    }
}
export default Lobby;
