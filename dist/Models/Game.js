class Game {
    gameId;
    isWhiteToMove = undefined;
    whitePlayer;
    blackPlayer;
    result;
    constructor(gameId, whitePlayer, blackPlayer, result) {
        this.gameId = gameId;
        this.whitePlayer = whitePlayer;
        this.blackPlayer = blackPlayer;
        this.result = result;
    }
    getGameId() {
        return this.gameId;
    }
    getIsWhiteToMove() {
        return this.isWhiteToMove;
    }
    getWhitePlayer() {
        return this.whitePlayer;
    }
    getBlackPlayer() {
        return this.blackPlayer;
    }
    getResult() {
        return this.result;
    }
}
export default Game;
