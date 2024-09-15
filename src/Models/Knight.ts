import Piece from "./Piece.js";
import Position from "./Position.js";

class Knight extends Piece {
  constructor(pieceId: number, position: Position, color: "white" | "black") {
    super(pieceId, position, color);
  }
}

export default Knight;
