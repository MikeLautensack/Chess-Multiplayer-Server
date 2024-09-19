import { SquareColor } from "../types.js";
import { directions } from "../utils/utils.js";
import Board from "./Board.js";
import Piece from "./Piece.js";
import Position from "./Position.js";

class Square {
  private squareId: number;
  private position: Position;
  private isOccupied: boolean;
  private piece: Piece;
  private color: SquareColor;
  private adjacencies: Map<string, Square | undefined[][]>;

  constructor(
    squareId: number,
    position: Position,
    isOccupied: boolean,
    piece: Piece,
    color: SquareColor,
    board: Board
  ) {
    this.squareId = squareId;
    this.position = position;
    this.isOccupied = isOccupied;
    this.piece = piece;
    this.color = color;
    this.setAdjacencies(board);
  }

  public setAdjacencies(board: Board): void {
    const squares = board.getSquares();
    for (let i = 0; i < squares.length; i++) {
      for (let j = 0; j < squares[i].length; j++) {
        const square = squares[i][j];
      }
    }
  }

  public getSquareId(): number {
    return this.squareId;
  }

  public getPosition(): Position {
    return this.position;
  }

  public getIsOccupied(): boolean {
    return this.isOccupied;
  }

  public getPiece(): Piece {
    return this.piece;
  }

  public getColor(): SquareColor {
    return this.color;
  }
}

export default Square;
