import Position from "./Position.js";

abstract class Piece {
  protected pieceId: number;
  protected position: Position;
  protected color: "white" | "black";
  protected isPinned: boolean = false;

  constructor(pieceId: number, position: Position, color: "white" | "black") {
    this.pieceId = pieceId;
    this.position = position;
    this.color = color;
  }

  public getPieceId(): number {
    return this.pieceId;
  }

  public getPosition(): Position {
    return this.position;
  }

  public getColor(): "white" | "black" {
    return this.color;
  }

  public getPinned(): boolean {
    return this.isPinned;
  }

  // abstract move(piece)
}

export default Piece;
