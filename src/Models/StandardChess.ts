import Game, { Result } from "./Game";
import Player from "./Player";

class StandardChess extends Game {
  constructor(
    gameId: number,
    isWhiteToMove: boolean,
    whitePlayer: Player,
    blackPlayer: Player,
    result: Result
  ) {
    super(gameId, isWhiteToMove, whitePlayer, blackPlayer, result);
  }
  startGame(): void {
    throw new Error("Method not implemented.");
  }
  endGame(): void {
    throw new Error("Method not implemented.");
  }
}

export default StandardChess;
