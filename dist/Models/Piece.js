class Piece {
    pieceId;
    position;
    color;
    isPinned = false;
    constructor(pieceId, position, color) {
        this.pieceId = pieceId;
        this.position = position;
        this.color = color;
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
}
export default Piece;
