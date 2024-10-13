import Board from "./Board.js";
import Position from "./Position.js";

abstract class Piece {
  protected pieceId: number;
  protected position: Position;
  protected color: "white" | "black";
  protected isPinned: boolean = false;
  protected pieceStr: string;
  protected legalMoves: Position[] = [];
  protected pinnedBy: Piece | undefined;

  constructor(
    pieceId: number,
    position: Position,
    color: "white" | "black",
    pieceStr: string
  ) {
    this.pieceId = pieceId;
    this.position = position;
    this.color = color;
    this.pieceStr = pieceStr;
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

  public getPieceStr(): string {
    return this.pieceStr;
  }

  public getPinnedBy(): Piece | undefined {
    return this.pinnedBy;
  }

  public setPinnedBy(piece: Piece): void {
    this.pinnedBy = piece;
  }

  abstract setControlledSquares(board: Board): void;
  abstract calcLegalMoves(board: Board): Position[];
}

export default Piece;
