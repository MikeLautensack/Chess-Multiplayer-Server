import Square from "./Square.js";

export type GridItem = undefined | Square;

abstract class Board {
  protected boardId: number;

  constructor(boardId: number) {
    this.boardId = boardId;
  }

  public getBoardId(): number {
    return this.boardId;
  }

  abstract initBoard(): void;

  abstract printBoard(): void;
}

export default Board;
