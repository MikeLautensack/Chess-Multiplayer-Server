import { genId } from "../utils/utils.js";
import Position from "./Position.js";
import Square from "./Square.js";

export type GridItem = undefined | Square;

abstract class Board {
  protected boardId: number;

  constructor() {
    this.boardId = genId();
  }

  public getBoardId(): number {
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
