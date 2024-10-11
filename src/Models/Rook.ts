import Board from "./Board.js";
import Piece from "./Piece.js";
import Position from "./Position.js";

class Rook extends Piece {
  constructor(pieceId: number, position: Position, color: "white" | "black") {
    super(
      pieceId,
      position,
      color,
      `${color === "white" ? "W" : color === "black" && "B"}R`
    );
  }

  public calcLegalMoves(board: Board): Position[] {
    let posArr: Position[] = [];
    const position = this.getPosition();
    const square = board.getSquare(position);
    const pieceColor = square?.getPiece()?.getColor();
    let adjacencies = square?.getAdjacencies();
    const dirs = ["n", "w", "s", "e"];
    dirs.forEach((dir) => {
      let obstructionDetected = false;
      let adjacentSquare = adjacencies?.get(dir);
      while (!obstructionDetected) {
        const isOccupied = adjacentSquare?.getIsOccupied();
        if (isOccupied) {
          obstructionDetected = true;
          const adjacentSquarePieceColor = adjacentSquare
            ?.getPiece()
            ?.getColor();
          if (pieceColor !== adjacentSquarePieceColor) {
            const pos = adjacentSquare?.getPosition();
            pos && posArr.push(pos);
          }
        } else {
          const pos = adjacentSquare?.getPosition();
          pos && posArr.push(pos);
          adjacentSquare = adjacentSquare?.getAdjacencies().get(dir);
        }
      }
    });
    return posArr;
  }
}

export default Rook;
