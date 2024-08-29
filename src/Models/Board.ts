import Square from "./Square";

abstract class Board {
  protected boardId: number;
  protected squares: Square[][];

  constructor(boardId: number, squares: Square[][]) {
    this.boardId = boardId;
    this.squares = squares;
  }

  public getBoardId(): number {
    return this.boardId;
  }

  public getSquares(): Square[][] {
    return this.squares;
  }
}

export default Board;
