import Position from "./Position.js";
import Square from "./Square.js";
import { v4 as uuidv4 } from "uuid";

export type GridItem = undefined | Square;

abstract class Board {
  protected boardId: string;

  constructor() {
    this.boardId = uuidv4();
  }

  public getBoardId(): string {
    return this.boardId;
  }

  abstract initSquares(): void;
  abstract setupBoard(): void;
  abstract calcControlAndPins(): void;
  abstract getSquares(): Square[][];
  abstract getSquare(position: Position): Square | undefined;
  abstract printBoard(): void;
}

export default Board;
