import Piece from "./Piece";
import Position from "./Position";

class Rook extends Piece {
  constructor(pieceId: number, position: Position, color: "white" | "black") {
    super(pieceId, position, color);
  }
}

export default Rook;
