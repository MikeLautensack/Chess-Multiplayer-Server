class Square {
    squareId;
    position;
    isOccupied;
    piece;
    color;
    constructor(squareId, position, isOccupied, piece, color) {
        this.squareId = squareId;
        this.position = position;
        this.isOccupied = isOccupied;
        this.piece = piece;
        this.color = color;
    }
    getSquareId() {
        return this.squareId;
    }
    getPosition() {
        return this.position;
    }
    getIsOccupied() {
        return this.isOccupied;
    }
    getPiece() {
        return this.piece;
    }
    getColor() {
        return this.color;
    }
}
export default Square;
