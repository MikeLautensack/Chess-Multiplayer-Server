class Pin {
    pinnedPiece;
    pinnedPieceIndex;
    pinningPiece;
    pinningPieceIndex;
    king;
    kingIndex;
    squareRay;
    constructor(pinnedPiece, pinnedPieceIndex, pinningPiece, pinningPieceIndex, king, kingIndex, squareRay) {
        this.pinnedPiece = pinnedPiece;
        this.pinnedPieceIndex = pinnedPieceIndex;
        this.pinningPiece = pinningPiece;
        this.pinningPieceIndex = pinningPieceIndex;
        this.king = king;
        this.kingIndex = kingIndex;
        this.squareRay = squareRay;
    }
    getPinnedPiece() {
        return this.pinnedPiece;
    }
    getPinnedPieceIndex() {
        return this.pinnedPieceIndex;
    }
    getPinningPiece() {
        return this.pinningPiece;
    }
    getPinningPieceIndex() {
        return this.pinningPieceIndex;
    }
    getKing() {
        return this.king;
    }
    getKingIndex() {
        return this.kingIndex;
    }
    getSquareRay() {
        return this.squareRay;
    }
}
export default Pin;
