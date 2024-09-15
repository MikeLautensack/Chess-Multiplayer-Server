import Player from "./Models/Player.js";
import StandardChess from "./Models/StandardChess.js";
import StandardChessBoard from "./Models/StandardChessBoard.js";

const chess = new StandardChess(
  1,
  new Player("test", 1),
  new Player("test2", 2),
  undefined
);

const board = chess.getBoard();

board.initBoard();

console.log(board.printBoard());
