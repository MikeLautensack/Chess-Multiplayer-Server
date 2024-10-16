import chalk from "chalk";
import Piece from "./Piece.js";
import { directions } from "./Square.js";
class King extends Piece {
    hasMoved = false;
    inCheck = false;
    constructor(position, color) {
        super(position, color, `${color === "white" ? "W" : color === "black" && "B"}K`, color === "white" ? chalk.green("♚ ") : chalk.black("♔ "), "king");
    }
    getHasMoved() {
        return this.hasMoved;
    }
    getInCheck() {
        return this.inCheck;
    }
    setControlledSquares(board) {
        const squares = board.getSquares();
        const position = this.position;
        const rank = position.getPositionIndex()[0];
        const file = position.getPositionIndex()[1];
        const color = this.color;
        directions.forEach((offset) => {
            const square = squares[rank + offset[0]][file + offset[1]];
            if (square) {
                if (color === "white") {
                    square.setIsControlledByWhite(true);
                }
                else {
                    square.setIsControlledByBlack(true);
                }
            }
        });
    }
    calcLegalMoves(board) {
        // Get current postition
        let posArr = [];
        const pos = this.position;
        const rankIndex = pos.getPositionIndex()[0];
        const fileIndex = pos.getPositionIndex()[1];
        const isWhite = this.color === "white";
        const squares = board.getSquares();
        // Check adjacent squares
        directions.forEach((direction) => {
            const rankIndexOffset = direction[0];
            const fileIndexOffset = direction[1];
            const offsetRankIndex = rankIndex + rankIndexOffset;
            const offsetFileIndex = fileIndex + fileIndexOffset;
            const square = squares[offsetRankIndex][offsetFileIndex];
            const offsetPosition = square.getPosition();
            const isControlledByWhite = square.getIsControlledByWhite();
            const isControlledByBlack = square.getIsControlledByBlack();
            const isOccupied = square.getIsOccupied();
            const isSameColor = square.getPiece()?.getColor() === this.color;
            if (isWhite) {
                if (!isControlledByBlack) {
                    if (isOccupied) {
                        if (!isSameColor) {
                            posArr.push(offsetPosition);
                        }
                    }
                    else {
                        posArr.push(offsetPosition);
                    }
                }
            }
            else {
                if (!isControlledByWhite) {
                    if (isOccupied) {
                        if (!isSameColor) {
                            posArr.push(offsetPosition);
                        }
                    }
                    else {
                        posArr.push(offsetPosition);
                    }
                }
            }
        });
        // Check possible castling squares
        if (!this.hasMoved && !this.inCheck) {
            if (isWhite) {
                // Check short castle
                let shortCastleObsticleDetected = false;
                const offsetIndexShort = fileIndex + 1;
                for (let file = offsetIndexShort; file < 7; file++) {
                    const square = squares[rankIndex][offsetIndexShort];
                    const isOccupied = square.getIsOccupied();
                    if (isOccupied) {
                        shortCastleObsticleDetected = true;
                    }
                }
                const isF1Occupied = squares[rankIndex][5].getIsOccupied();
                const rookSquare = squares[7][7];
                const rook = rookSquare.getPiece();
                if (rook) {
                    const hasRookMoved = rook.getHasMoved();
                    if (!shortCastleObsticleDetected && !isF1Occupied && !hasRookMoved) {
                        const castlePos = squares[rankIndex][6].getPosition();
                        posArr.push(castlePos);
                    }
                }
                // Check long castle
                let longCastleObsticleDetected = false;
                const offsetIndexLong = fileIndex - 1;
                for (let file = offsetIndexLong; file < 1; file--) {
                    const square = squares[rankIndex][offsetIndexLong];
                    const isOccupied = square.getIsOccupied();
                    if (isOccupied) {
                        longCastleObsticleDetected = true;
                    }
                }
                const isD1Occupied = squares[rankIndex][3].getIsOccupied();
                const rookSquareLong = squares[7][0];
                const rookLong = rookSquareLong.getPiece();
                if (rookLong) {
                    const hasRookMoved = rookLong.getHasMoved();
                    if (!longCastleObsticleDetected && !isD1Occupied && !hasRookMoved) {
                        const castlePos = squares[rankIndex][2].getPosition();
                        posArr.push(castlePos);
                    }
                }
            }
            else {
                // Check short castle
                let shortCastleObsticleDetected = false;
                const offsetIndexShort = fileIndex + 1;
                for (let file = offsetIndexShort; file < 7; file++) {
                    const square = squares[rankIndex][offsetIndexShort];
                    const isOccupied = square.getIsOccupied();
                    if (isOccupied) {
                        shortCastleObsticleDetected = true;
                    }
                }
                const isF8Occupied = squares[rankIndex][5].getIsOccupied();
                const rookSquare = squares[0][7];
                const rook = rookSquare.getPiece();
                if (rook) {
                    const hasRookMoved = rook.getHasMoved();
                    if (!shortCastleObsticleDetected && !isF8Occupied && !hasRookMoved) {
                        const castlePos = squares[rankIndex][6].getPosition();
                        posArr.push(castlePos);
                    }
                }
                // Check long castle
                let longCastleObsticleDetected = false;
                const offsetIndexLong = fileIndex - 1;
                for (let file = offsetIndexLong; file < 1; file--) {
                    const square = squares[rankIndex][offsetIndexLong];
                    const isOccupied = square.getIsOccupied();
                    if (isOccupied) {
                        longCastleObsticleDetected = true;
                    }
                }
                const isD8Occupied = squares[rankIndex][3].getIsOccupied();
                const rookSquareLong = squares[0][0];
                const rookLong = rookSquareLong.getPiece();
                if (rookLong) {
                    const hasRookMoved = rookLong.getHasMoved();
                    if (!longCastleObsticleDetected && !isD8Occupied && !hasRookMoved) {
                        const castlePos = squares[rankIndex][2].getPosition();
                        posArr.push(castlePos);
                    }
                }
            }
        }
        return posArr;
    }
}
export default King;
