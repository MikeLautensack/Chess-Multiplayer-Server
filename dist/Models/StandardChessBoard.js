import Board from "./Board.js";
import Pawn from "./Pawn.js";
import Position from "./Position.js";
import Square from "./Square.js";
class StandardChessBoard extends Board {
    squares = [];
    constructor(boardId) {
        super(boardId);
        this.initBoard();
    }
    initBoard() {
        for (let rank = 0; rank < 8; rank++) {
            this.squares[rank] = [];
            for (let file = 0; file < 8; file++) {
                const position = new Position(String.fromCharCode(97 + file), (8 - rank).toString());
                const isLightSquare = (rank + file) % 2 === 0;
                const squareColor = isLightSquare ? "light" : "dark";
                let piece = undefined;
                if (rank === 1) {
                    piece = new Pawn(this.getBoardId() * 100 + rank * 8 + file, position, "white");
                }
                else if (rank === 6) {
                    piece = new Pawn(this.getBoardId() * 100 + rank * 8 + file, position, "black");
                }
                this.squares[rank][file] = new Square(this.getBoardId() * 100 + rank * 8 + file, position, piece !== undefined, piece, squareColor);
            }
        }
    }
    printBoard() {
        for (let rank = 0; rank < 8; rank++) {
            let rankStr = "";
            for (let file = 0; file < 8; file++) {
                const square = this.squares[rank][file];
                rankStr += square.getIsOccupied()
                    ? square.getPiece()?.getColor() === "white"
                        ? "P"
                        : "p"
                    : ".";
                rankStr += " ";
            }
            console.log(rankStr);
        }
    }
}
export default StandardChessBoard;
