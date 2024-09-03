import Piece from "./Piece";
import Position from "./Position";

class King extends Piece {
  private hasMoved: boolean = false;

  constructor(pieceId: number, position: Position, color: "white" | "black") {
    super(pieceId, position, color);
  }
}

export default King;
