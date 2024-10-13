import Board from "./Board.js";
import Piece from "./Piece.js";
import Position from "./Position.js";
import Square from "./Square.js";

class Pawn extends Piece {
  private hasMoved: boolean = false;

  constructor(pieceId: number, position: Position, color: "white" | "black") {
    super(
      pieceId,
      position,
      color,
      `${color === "white" ? "W" : color === "black" && "B"}P`
    );
  }

  public setControlledSquares(board: Board): void {}

  public calcLegalMoves(board: Board): Position[] {
    const position = this.position;
    let posArr: Position[] = [];
    const color = this.color;
    const square = board.getSquare(position);
    if (color === "white") {
      const nwSquare = square?.getAdjacencies().get("nw");
      const nSquare = square?.getAdjacencies().get("n");
      const n2Square = nSquare?.getAdjacencies().get("n");
      const neSquare = square?.getAdjacencies().get("ne");
      let squares = [];
      if (this.hasMoved) {
        squares = [nwSquare, nSquare, neSquare];
      } else {
        squares = [nwSquare, nSquare, n2Square, neSquare];
      }
      squares.forEach((square: Square | undefined) => {
        if (square) {
          const isSquareOccupied = square.getIsOccupied();
          if (isSquareOccupied) {
          } else {
          }
        }
      });
    } else {
    }
    return posArr;
  }
}

export default Pawn;
