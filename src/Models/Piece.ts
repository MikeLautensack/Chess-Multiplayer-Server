import Board from "./Board.js";
import Position from "./Position.js";
import { v4 as uuidv4 } from "uuid";

abstract class Piece {
  protected pieceId: string;
  protected position: Position;
  protected color: "white" | "black";
  protected isPinned: boolean = false;
  protected pieceStr: string;
  protected pieceUnicode: string;
  protected legalMoves: Position[] = [];
  protected pinnedBy: Piece | undefined;

  constructor(
    position: Position,
    color: "white" | "black",
    pieceStr: string,
    pieceUnicode: string
  ) {
    this.pieceId = uuidv4();
    this.position = position;
    this.color = color;
    this.pieceStr = pieceStr;
    this.pieceUnicode = pieceUnicode;
  }

  public getPieceId(): string {
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

  public getPieceUnicode(): string {
    return this.pieceUnicode;
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
