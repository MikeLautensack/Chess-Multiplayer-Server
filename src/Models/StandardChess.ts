import Game, { Result } from "./Game";
import Player from "./Player";
import StandardChessBoard from "./StandardChessBoard";

class StandardChess extends Game {
  private board: StandardChessBoard;
  constructor(
    gameId: number,
    whitePlayer: Player,
    blackPlayer: Player,
    result: Result,
    board: StandardChessBoard
  ) {
    super(gameId, whitePlayer, blackPlayer, result);
    this.board = board;
  }

  public getBoard(): StandardChessBoard {
    return this.board;
  }

  public startGame(): void {
    this.board.initBoard();
    this.isWhiteToMove = true;
    this.board.printBoard();
  }

  public endGame(): void {
    throw new Error("Method not implemented.");
  }
}

export default StandardChess;
