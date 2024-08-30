import Piece from "./Piece";
import Position from "./Position";

class Queen extends Piece {
  constructor(
    pieceId: number,
    position: Position,
    color: "white" | "black",
    isPinned: boolean
  ) {
    super(pieceId, position, color, isPinned);
  }
}

export default Queen;
