import { v4 as uuidv4 } from "uuid";
class Square {
    squareId;
    position;
    isOccupied;
    piece = undefined;
    color;
    isControlledByWhite = false;
    isControlledByBlack = false;
    adjacencies = new Map();
    constructor(position, isOccupied, color, board) {
        this.squareId = uuidv4();
        this.position = position;
        this.isOccupied = isOccupied;
        this.color = color;
        this.setAdjacencies(board);
    }
    setAdjacencies(board) {
        const squares = board.getSquares();
        const currentPostitionIndex = this.position.getPositionIndex();
        directions.forEach((positionIndexMod, direction) => {
            const rank = positionIndexMod[0] + currentPostitionIndex[0];
            const file = positionIndexMod[1] + currentPostitionIndex[1];
            if (rank >= 0 &&
                rank < squares.length &&
                file >= 0 &&
                file < squares[rank].length) {
                this.adjacencies.set(direction, squares[rank][file]);
            }
            else {
                this.adjacencies.set(direction, undefined);
            }
        });
    }
    getAdjacencies() {
        return this.adjacencies;
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
    setIsOccupied(isOccupied) {
        this.isOccupied = isOccupied;
    }
    getPiece() {
        return this.piece;
    }
    setPiece(piece) {
        this.piece = piece;
    }
    getColor() {
        return this.color;
    }
    getIsControlledByWhite() {
        return this.isControlledByWhite;
    }
    setIsControlledByWhite(bool) {
        this.isControlledByWhite = bool;
    }
    getIsControlledByBlack() {
        return this.isControlledByBlack;
    }
    setIsControlledByBlack(bool) {
        this.isControlledByBlack = bool;
    }
}
export default Square;
export const directions = new Map([
    ["nw", [-1, -1]],
    ["n", [-1, 0]],
    ["ne", [-1, 1]],
    ["w", [0, -1]],
    ["e", [0, 1]],
    ["sw", [1, -1]],
    ["s", [1, 0]],
    ["se", [1, 1]],
]);
