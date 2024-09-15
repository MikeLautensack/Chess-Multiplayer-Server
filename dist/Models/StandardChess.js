import Game from "./Game.js";
import StandardChessBoard from "./StandardChessBoard.js";
class StandardChess extends Game {
    board = new StandardChessBoard(1);
    constructor(gameId, whitePlayer, blackPlayer, result) {
        super(gameId, whitePlayer, blackPlayer, result);
    }
    getBoard() {
        return this.board;
    }
    startGame() {
        this.board.initBoard();
        this.isWhiteToMove = true;
        this.board.printBoard();
    }
    endGame() {
        throw new Error("Method not implemented.");
    }
}
export default StandardChess;
