import { v4 as uuidv4 } from "uuid";
class Lobby {
    lobbyId;
    lobbyName;
    players = new Map();
    games = new Map();
    host;
    access;
    password;
    maxPlayers;
    constructor(lobbyName, host, access, password, maxPlayers) {
        this.lobbyId = uuidv4();
        this.lobbyName = lobbyName;
        this.host = host;
        this.players.set(host.getUsername(), host);
        this.access = access;
        access === "private" ? (this.password = password) : undefined;
        maxPlayers ? (this.maxPlayers = maxPlayers) : (this.maxPlayers = 16);
    }
    getLobbyId() {
        return this.lobbyId;
    }
    getLobbyName() {
        return this.lobbyName;
    }
    getHost() {
        return this.host;
    }
    getPlayers() {
        return this.players;
    }
    getMaxPlayers() {
        return this.maxPlayers;
    }
    getGames() {
        return this.games;
    }
    getAccess() {
        return this.access;
    }
    getPassword() {
        return this.password;
    }
    addPlayer(player) {
        this.players.set(player.getUsername(), player);
    }
    removePlayer(playerName) {
        this.players.delete(playerName);
    }
    addGame(game) {
        this.games.set(game.getGameId(), game);
    }
    removeGame(gameId) {
        this.games.delete(gameId);
    }
}
export default Lobby;
