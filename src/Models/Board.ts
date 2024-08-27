abstract class Board {
  protected boardId: number;

  constructor(boardId: number) {
    this.boardId = boardId;
  }

  public getBoardId(): number {
    return this.boardId;
  }
}

export default Board;
