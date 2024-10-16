import { v4 as uuidv4 } from "uuid";
class Piece {
    pieceId;
    position;
    color;
    isPinned = false;
    pieceStr;
    pieceUnicode;
    legalMoves = [];
    pinnedBy;
    type;
    constructor(position, color, pieceStr, pieceUnicode, type) {
        this.pieceId = uuidv4();
        this.position = position;
        this.color = color;
        this.pieceStr = pieceStr;
        this.pieceUnicode = pieceUnicode;
        this.type = type;
    }
    getPieceId() {
        return this.pieceId;
    }
    getPosition() {
        return this.position;
    }
    getColor() {
        return this.color;
    }
    getPinned() {
        return this.isPinned;
    }
    getPieceStr() {
        return this.pieceStr;
    }
    getPieceUnicode() {
        return this.pieceUnicode;
    }
    getPinnedBy() {
        return this.pinnedBy;
    }
    setPinnedBy(piece) {
        this.pinnedBy = piece;
    }
    getType() {
        return this.type;
    }
}
export default Piece;
