import Player from "./Models/Player.js";
import StandardChess from "./Models/StandardChess.js";
import StandardChessBoard, {
  startingPositions,
} from "./Models/StandardChessBoard.js";

const chess = new StandardChess(new Player("test"), new Player("test2"));

const board = chess.getBoard();

board.printBoard();
console.log(startingPositions.get("a8"));
