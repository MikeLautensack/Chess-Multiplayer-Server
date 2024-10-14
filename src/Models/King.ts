import Board from "./Board.js";
import Piece from "./Piece.js";
import Position from "./Position.js";
import Rook from "./Rook.js";
import { directions } from "./Square.js";

class King extends Piece {
  private hasMoved: boolean = false;
  private inCheck: boolean = false;

  constructor(position: Position, color: "white" | "black") {
    super(
      position,
      color,
      `${color === "white" ? "W" : color === "black" && "B"}K`,
      color === "white" ? "♚ " : "♔ ",
      "king"
    );
  }

  public getHasMoved(): boolean {
    return this.hasMoved;
  }

  public getInCheck(): boolean {
    return this.inCheck;
  }

  public setControlledSquares(board: Board): void {
    const squares = board.getSquares();
    const position = this.position;
    const rank = position.getPositionIndex()[0];
    const file = position.getPositionIndex()[1];
    const color = this.color;
    directions.forEach((offset: number[]) => {
      const square = squares[rank + offset[0]][file + offset[1]];
      if (square) {
        if (color === "white") {
          square.setIsControlledByWhite(true);
        } else {
          square.setIsControlledByBlack(true);
        }
      }
    });
  }

  public calcLegalMoves(board: Board): Position[] {
    // Get current postition
    let posArr: Position[] = [];
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
          } else {
            posArr.push(offsetPosition);
          }
        }
      } else {
        if (!isControlledByWhite) {
          if (isOccupied) {
            if (!isSameColor) {
              posArr.push(offsetPosition);
            }
          } else {
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
        const rook = rookSquare.getPiece() as Rook;
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
        const rookLong = rookSquareLong.getPiece() as Rook;
        if (rookLong) {
          const hasRookMoved = rookLong.getHasMoved();
          if (!longCastleObsticleDetected && !isD1Occupied && !hasRookMoved) {
            const castlePos = squares[rankIndex][2].getPosition();
            posArr.push(castlePos);
          }
        }
      } else {
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
        const rook = rookSquare.getPiece() as Rook;
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
        const rookLong = rookSquareLong.getPiece() as Rook;
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
