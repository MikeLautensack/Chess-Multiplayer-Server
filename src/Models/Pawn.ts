import Piece from "./Piece";
import Position from "./Position";

class Pawn extends Piece {
  private hasMoved: boolean = false;

  constructor(pieceId: number, position: Position, color: "white" | "black") {
    super(pieceId, position, color);
  }
}

export default Pawn;
