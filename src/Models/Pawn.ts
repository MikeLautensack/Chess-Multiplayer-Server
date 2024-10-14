import Board from "./Board.js";
import Piece from "./Piece.js";
import Position from "./Position.js";
import Square from "./Square.js";

class Pawn extends Piece {
  private hasMoved: boolean = false;

  constructor(position: Position, color: "white" | "black") {
    super(
      position,
      color,
      `${color === "white" ? "W" : color === "black" && "B"}P`,
      color === "white" ? "♟︎ " : "♙ ",
      "pawn"
    );
  }

  public setControlledSquares(board: Board): void {
    const squares = board.getSquares();
    const position = this.position;
    const rankIndex = position.getPositionIndex()[0];
    const fileIndex = position.getPositionIndex()[1];
    if (this.color === "white") {
      const squareLeft = squares[rankIndex - 1][fileIndex - 1];
      const squareRight = squares[rankIndex - 1][fileIndex + 1];
      const arr = [squareLeft, squareRight];
      arr.forEach((square: Square) => {
        if (square) {
          square.setIsControlledByWhite(true);
        }
      });
    } else {
      const squareLeft = squares[rankIndex + 1][fileIndex - 1];
      const squareRight = squares[rankIndex + 1][fileIndex + 1];
      const arr = [squareLeft, squareRight];
      arr.forEach((square: Square) => {
        if (square) {
          square.setIsControlledByWhite(true);
        }
      });
    }
  }

  public calcLegalMoves(board: Board): Position[] {
    const position = this.position;
    let posArr: Position[] = [];
    const color = this.color;
    const square = board.getSquare(position);
    if (!this.isPinned) {
      if (color === "white") {
        // Check squares on diagonals
        const nwSquare = square?.getAdjacencies().get("nw");
        const neSquare = square?.getAdjacencies().get("ne");
        const diagonals = [nwSquare, neSquare];
        diagonals.forEach((square: Square | undefined) => {
          if (square) {
            const isSquareOccupied = square?.getIsOccupied();
            const pieceColor = square?.getPiece()?.getColor();
            if (isSquareOccupied) {
              if (pieceColor !== color) {
                posArr.push(square?.getPosition());
              }
            }
          }
        });

        // Check forward squares
        const nSquare = square?.getAdjacencies().get("n");
        const n2Square = nSquare?.getAdjacencies().get("n");
        const forwards = [nSquare];
        if (!this.hasMoved) {
          forwards.push(n2Square);
        }
        let obstructionDetected = false;
        let index = 0;
        while (!obstructionDetected && index < forwards.length) {
          const square = forwards[index];
          const isSquareOccupied = square?.getIsOccupied();
          if (square) {
            if (!isSquareOccupied) {
              posArr.push(square?.getPosition());
            } else {
              obstructionDetected = true;
            }
          }
          index++;
        }
      } else {
        // Check squares on diagonals
        const swSquare = square?.getAdjacencies().get("sw");
        const seSquare = square?.getAdjacencies().get("se");
        const diagonals = [swSquare, seSquare];
        diagonals.forEach((square: Square | undefined) => {
          if (square) {
            const isSquareOccupied = square?.getIsOccupied();
            const pieceColor = square?.getPiece()?.getColor();
            if (isSquareOccupied) {
              if (pieceColor !== color) {
                posArr.push(square?.getPosition());
              }
            }
          }
        });

        // Check forward squares
        const sSquare = square?.getAdjacencies().get("s");
        const s2Square = sSquare?.getAdjacencies().get("s");
        const forwards = [sSquare];
        if (!this.hasMoved) {
          forwards.push(s2Square);
        }
        let obstructionDetected = false;
        let index = 0;
        while (!obstructionDetected && index < forwards.length) {
          const square = forwards[index];
          const isSquareOccupied = square?.getIsOccupied();
          if (square) {
            if (!isSquareOccupied) {
              posArr.push(square?.getPosition());
            } else {
              obstructionDetected = true;
            }
          }
          index++;
        }
      }
    } else {
    }
    return posArr;
  }
}

export default Pawn;
