import { v4 as uuidv4 } from "uuid";
class Game {
    gameId;
    isWhiteToMove = true;
    whitePlayer;
    blackPlayer;
    checkmate = false;
    stalemate = false;
    result = undefined;
    moves = new Map([]);
    constructor(whitePlayer, blackPlayer) {
        this.gameId = uuidv4();
        this.whitePlayer = whitePlayer;
        this.blackPlayer = blackPlayer;
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
    getMoves() {
        return this.moves;
    }
}
export default Game;
