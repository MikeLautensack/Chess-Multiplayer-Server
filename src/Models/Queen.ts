import Piece from "./Piece";
import Position from "./Position";

class Queen extends Piece {
  constructor(pieceId: number, position: Position, color: "white" | "black") {
    super(pieceId, position, color);
  }
}

export default Queen;
