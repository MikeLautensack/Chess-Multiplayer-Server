abstract class Piece {
  protected pieceId: number;
  protected position: string;

  constructor(pieceId: number, position: string) {
    this.pieceId = pieceId;
    this.position = position;
  }

  public getPieceId(): number {
    return this.pieceId;
  }

  public getPosition(): string {
    return this.position;
  }
}
