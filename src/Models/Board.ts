import { genId } from "../utils/utils.js";
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

  abstract setPieces(): void;
  abstract getSquares(): Square[][];
  abstract printBoard(): void;
}

export default Board;
