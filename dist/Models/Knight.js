import chalk from "chalk";
import Piece from "./Piece.js";
class Knight extends Piece {
    constructor(position, color) {
        super(position, color, `${color === "white" ? "W" : color === "black" && "B"}N`, color === "white" ? chalk.green("♞ ") : chalk.black("♘ "), "knight");
    }
    setControlledSquares(board) {
        const squares = board.getSquares();
        const position = this.position;
        const rank = position.getPositionIndex()[0];
        const file = position.getPositionIndex()[1];
        const color = this.color;
        knightOffsets.forEach((offset) => {
            const square = squares[rank + offset[0]][file + offset[1]];
            if (square) {
                if (color === "white") {
                    square.setIsControlledByWhite(true);
                }
                else {
                    square.setIsControlledByBlack(true);
                }
            }
        });
    }
    calcLegalMoves(board) {
        if (!this.isPinned) {
            let posArr = [];
            const pos = this.position;
            const currentRank = pos.getPositionIndex()[0];
            const currentFile = pos.getPositionIndex()[1];
            const squares = board.getSquares();
            const pieceColor = this.color;
            knightOffsets.forEach((offset) => {
                const square = squares[currentRank + offset[0]][currentFile + offset[1]];
                const isOccupied = square.getIsOccupied();
                const color = square.getPiece()?.getColor();
                if (isOccupied) {
                    if (pieceColor !== color) {
                        posArr.push(square.getPosition());
                    }
                }
                else {
                    posArr.push(square.getPosition());
                }
            });
            return posArr;
        }
        else {
            // A knight can never capture the piece that is pinning it so here we just return a empty array
            return [];
        }
    }
}
export default Knight;
const knightOffsets = [
    [2, -1],
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
];
