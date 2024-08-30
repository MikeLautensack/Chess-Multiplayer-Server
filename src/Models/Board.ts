import Square from "./Square";

export type GridItem = undefined | Square;

abstract class Board {
  protected boardId: number;
  protected grid: GridItem[][];

  constructor(boardId: number, grid: GridItem[][]) {
    this.boardId = boardId;
    this.grid = grid;
  }

  public getBoardId(): number {
    return this.boardId;
  }

  public getGrid(): GridItem[][] {
    return this.grid;
  }
}

export default Board;
