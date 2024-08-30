import Board from "./Board";
import Pawn from "./Pawn";
import Piece from "./Piece";
import Position from "./Position";
import Square from "./Square";

class StandardChessBoard extends Board {
  private squares: Square[][] = [[], [], [], [], [], [], [], []];

  constructor(boardId: number) {
    super(boardId);
  }

  public initBoard(): void {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        this.squares[i][j] = new Square(
          i + j,
          new Position("a", "b"),
          false,
          new Pawn(321, new Position("a", "b"), "white", false),
          "dark"
        );
      }
    }
  }

  public printBoard(): void {
    for (let i = 0; i < this.squares.length; i++) {
      let rank = [];
      for (let j = 0; j < this.squares[i].length; j++) {
        rank.push(this.squares[i][j]);
      }
      console.log(rank);
    }
  }
}

export default StandardChessBoard;
