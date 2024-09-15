import Piece from "./Piece.js";
class King extends Piece {
    hasMoved = false;
    constructor(pieceId, position, color) {
        super(pieceId, position, color);
    }
}
export default King;
