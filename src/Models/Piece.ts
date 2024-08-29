abstract class Piece {
  protected pieceId: number;
  protected position: string;
  protected color: "white" | "black";
  protected pinned: boolean = false;

  constructor(
    pieceId: number,
    position: string,
    color: "white" | "black",
    pinned: boolean
  ) {
    this.pieceId = pieceId;
    this.position = position;
    this.color = color;
    this.pinned = pinned;
  }

  public getPieceId(): number {
    return this.pieceId;
  }

  public getPosition(): string {
    return this.position;
  }

  public getColor(): "white" | "black" {
    return this.color;
  }

  public getPinned(): boolean {
    return this.pinned;
  }

  // abstract move(piece)
}

export default Piece;
