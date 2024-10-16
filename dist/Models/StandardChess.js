import Game from "./Game.js";
import StandardChessBoard from "./StandardChessBoard.js";
class StandardChess extends Game {
    board = new StandardChessBoard();
    constructor(whitePlayer, blackPlayer) {
        super(whitePlayer, blackPlayer);
    }
    getBoard() {
        return this.board;
    }
    startGame() { }
    makeMove() { }
    endGame() {
        throw new Error("Method not implemented.");
    }
    printGame() {
        // Data
        const id = this.gameId;
        const whitePlayer = this.whitePlayer;
        const blackPlayer = this.blackPlayer;
        const moves = this.moves;
        // Print
        console.clear();
        console.log(`Game ID: ${id}`);
        console.log("_______________________________");
        console.log();
        console.log(`Playing White: ${whitePlayer.getUsername()}`);
        console.log(`Playing Black: ${blackPlayer.getUsername()}`);
        console.log();
        console.log(` | White | Black |`);
        moves.forEach((moves, moveNumber) => {
            console.log(`${moveNumber}| ${moves[0]}  | ${moves[1]}  |`);
        });
        console.log();
        this.board.printBoard();
    }
}
export default StandardChess;
