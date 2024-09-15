import Piece from "./Piece.js";
class Pawn extends Piece {
    hasMoved = false;
    constructor(pieceId, position, color) {
        super(pieceId, position, color);
    }
}
export default Pawn;
