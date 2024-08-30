import Board, { GridItem } from "./Board";

class StandardChessBoard extends Board {
  constructor(boardId: number, grid: GridItem[][]) {
    super(boardId, grid);
  }
}
