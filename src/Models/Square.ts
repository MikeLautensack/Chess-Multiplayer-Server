import Piece from "./Piece";
import Position from "./Position";

class Square {
  private squareId: number;
  private position: Position;
  private occupied: boolean;
  private piece: Piece;
  private color: "light" | "dark";

  constructor(
    squareId: number,
    position: Position,
    occupied: boolean,
    piece: Piece,
    color: "light" | "dark"
  ) {
    this.squareId = squareId;
    this.position = position;
    this.occupied = occupied;
    this.piece = piece;
    this.color = color;
  }

  public getSquareId(): number {
    return this.squareId;
  }

  public getPosition(): Position {
    return this.position;
  }

  public getOccupied(): boolean {
    return this.occupied;
  }

  public getPiece(): Piece {
    return this.piece;
  }

  public getColor(): "light" | "dark" {
    return this.color;
  }
}

export default Square;
