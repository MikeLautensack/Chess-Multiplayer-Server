import Piece from "./Piece";
import Position from "./Position";

class Bishop extends Piece {
  constructor(pieceId: number, position: Position, color: "white" | "black") {
    super(pieceId, position, color);
  }
}

export default Bishop;
