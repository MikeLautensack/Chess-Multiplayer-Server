import Piece from "./Piece";
import Position from "./Position";

class Bishop extends Piece {
  constructor(
    pieceId: number,
    position: Position,
    color: "white" | "black",
    isPinned: boolean
  ) {
    super(pieceId, position, color, isPinned);
  }
}

export default Bishop;
