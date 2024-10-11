import Board from "./Board.js";
import Piece from "./Piece.js";
import Position from "./Position.js";

class Bishop extends Piece {
  constructor(pieceId: number, position: Position, color: "white" | "black") {
    super(
      pieceId,
      position,
      color,
      `${color === "white" ? "W" : color === "black" && "B"}B`
    );
  }

  public calcLegalMoves(board: Board): Position[] {
    let posArr: Position[] = [];
    const position = this.getPosition();
    const square = board.getSquare(position);
    const pieceColor = square?.getPiece()?.getColor();
    let adjacencies = square?.getAdjacencies();
    const dirs = ["nw", "ne", "se", "sw"];
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

export default Bishop;
