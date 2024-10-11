import Game, { Result } from "./Game.js";
import Player from "./Player.js";
import StandardChessBoard from "./StandardChessBoard.js";

class StandardChess extends Game {
  private board: StandardChessBoard = new StandardChessBoard();

  constructor(whitePlayer: Player, blackPlayer: Player) {
    super(whitePlayer, blackPlayer);
  }

  public getBoard(): StandardChessBoard {
    return this.board;
  }

  public startGame(): void {}

  public makeMove(): void {}

  public endGame(): void {
    throw new Error("Method not implemented.");
  }
}

export default StandardChess;
