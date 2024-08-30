import Player from "./Models/Player";
import StandardChess from "./Models/StandardChess";
import StandardChessBoard from "./Models/StandardChessBoard";

const chess = new StandardChess(
  1,
  new Player("test", 1),
  new Player("test2", 2),
  undefined,
  new StandardChessBoard(1)
);

const board = chess.getBoard();

board.initBoard();

console.log(board.printBoard());
