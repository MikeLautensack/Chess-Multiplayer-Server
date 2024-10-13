import Piece from "./Piece.js";
import Square from "./Square.js";

class Pin {
  private pinnedPiece: Piece;
  private pinnedPieceIndex: number;
  private pinningPiece: Piece;
  private pinningPieceIndex: number;
  private king: Piece;
  private kingIndex: number;
  private squareRay: Square[];

  constructor(
    pinnedPiece: Piece,
    pinnedPieceIndex: number,
    pinningPiece: Piece,
    pinningPieceIndex: number,
    king: Piece,
    kingIndex: number,
    squareRay: Square[]
  ) {
    this.pinnedPiece = pinnedPiece;
    this.pinnedPieceIndex = pinnedPieceIndex;
    this.pinningPiece = pinningPiece;
    this.pinningPieceIndex = pinningPieceIndex;
    this.king = king;
    this.kingIndex = kingIndex;
    this.squareRay = squareRay;
  }

  public getPinnedPiece(): Piece {
    return this.pinnedPiece;
  }

  public getPinnedPieceIndex(): number {
    return this.pinnedPieceIndex;
  }

  public getPinningPiece(): Piece {
    return this.pinningPiece;
  }

  public getPinningPieceIndex(): number {
    return this.pinningPieceIndex;
  }

  public getKing(): Piece {
    return this.king;
  }

  public getKingIndex(): number {
    return this.kingIndex;
  }

  public getSquareRay(): Square[] {
    return this.squareRay;
  }
}

export default Pin;
