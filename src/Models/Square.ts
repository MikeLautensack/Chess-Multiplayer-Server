import Position from "./Position";

class Square {
  private squareId: number;
  private position: Position;

  constructor(squareId: number, position: Position) {
    this.squareId = squareId;
    this.position = position;
  }

  public getSquareId(): number {
    return this.squareId;
  }

  public getPosition(): Position {
    return this.position;
  }
}

export default Square;
