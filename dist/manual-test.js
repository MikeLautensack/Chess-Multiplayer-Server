import Player from "./Models/Player.js";
import StandardChess from "./Models/StandardChess.js";
const chess = new StandardChess(new Player("white"), new Player("black"));
chess.printGame();
