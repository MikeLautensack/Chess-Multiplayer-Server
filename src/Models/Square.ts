import { SquareColor } from "../types.js";
import Board from "./Board.js";
import Piece from "./Piece.js";
import Position from "./Position.js";
import { v4 as uuidv4 } from "uuid";

class Square {
  private squareId: string;
  private position: Position;
  private isOccupied: boolean;
  private piece: Piece | undefined = undefined;
  private color: SquareColor;
  private isControlledByWhite: boolean = false;
  private isControlledByBlack: boolean = false;
  private adjacencies: Map<string, Square | undefined> = new Map<
    string,
    Square | undefined
  >();

  constructor(
    position: Position,
    isOccupied: boolean,
    color: SquareColor,
    board: Board
  ) {
    this.squareId = uuidv4();
    this.position = position;
    this.isOccupied = isOccupied;
    this.color = color;
    this.setAdjacencies(board);
  }

  public setAdjacencies(board: Board): void {
    const squares = board.getSquares();
    const currentPostitionIndex = this.position.getPositionIndex();
    directions.forEach((positionIndexMod: number[], direction: string) => {
      const rank = positionIndexMod[0] + currentPostitionIndex[0];
      const file = positionIndexMod[1] + currentPostitionIndex[1];
      if (
        rank >= 0 &&
        rank < squares.length &&
        file >= 0 &&
        file < squares[rank].length
      ) {
        this.adjacencies.set(direction, squares[rank][file]);
      } else {
        this.adjacencies.set(direction, undefined);
      }
    });
  }

  public getAdjacencies(): Map<string, Square | undefined> {
    return this.adjacencies;
  }

  public getSquareId(): string {
    return this.squareId;
  }

  public getPosition(): Position {
    return this.position;
  }

  public getIsOccupied(): boolean {
    return this.isOccupied;
  }

  public setIsOccupied(isOccupied: boolean): void {
    this.isOccupied = isOccupied;
  }

  public getPiece(): Piece | undefined {
    return this.piece;
  }

  public setPiece(piece: Piece): void {
    this.piece = piece;
  }

  public getColor(): SquareColor {
    return this.color;
  }

  public getIsControlledByWhite(): boolean {
    return this.isControlledByWhite;
  }

  public setIsControlledByWhite(bool: boolean): void {
    this.isControlledByWhite = bool;
  }

  public getIsControlledByBlack(): boolean {
    return this.isControlledByBlack;
  }

  public setIsControlledByBlack(bool: boolean): void {
    this.isControlledByBlack = bool;
  }
}

export default Square;

export const directions = new Map([
  ["nw", [-1, -1]],
  ["n", [-1, 0]],
  ["ne", [-1, 1]],
  ["w", [0, -1]],
  ["e", [0, 1]],
  ["sw", [1, -1]],
  ["s", [1, 0]],
  ["se", [1, 1]],
]);
