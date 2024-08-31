import Piece from "./Piece";
import Position from "./Position";

class Square {
  private squareId: number;
  private position: Position;
  private isOccupied: boolean;
  private piece: Piece;
  private color: "light" | "dark";

  constructor(
    squareId: number,
    position: Position,
    isOccupied: boolean,
    piece: Piece,
    color: "light" | "dark"
  ) {
    this.squareId = squareId;
    this.position = position;
    this.isOccupied = isOccupied;
    this.piece = piece;
    this.color = color;
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

  public getColor(): "light" | "dark" {
    return this.color;
  }
}

export default Square;
