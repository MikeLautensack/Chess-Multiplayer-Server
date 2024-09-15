import Piece from "./Piece.js";
import Position from "./Position.js";

class Pawn extends Piece {
  private hasMoved: boolean = false;

  constructor(pieceId: number, position: Position, color: "white" | "black") {
    super(pieceId, position, color);
  }
}

export default Pawn;
