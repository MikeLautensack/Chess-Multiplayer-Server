import Player from "./Models/Player.js";
import StandardChess from "./Models/StandardChess.js";
import StandardChessBoard from "./Models/StandardChessBoard.js";

const chess = new StandardChess(new Player("test"), new Player("test2"));

const board = chess.getBoard();

board.setPieces();

console.log(board.printBoard());
