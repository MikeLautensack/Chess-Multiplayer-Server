import Board from "./Board";
import Player from "./Player";

export type Result = undefined | "white won" | "black won" | "draw";

abstract class Game {
  protected gameId: number;
  protected isWhiteToMove: boolean | undefined = undefined;
  protected whitePlayer: Player;
  protected blackPlayer: Player;
  protected result: undefined | "white won" | "black won" | "draw";

  constructor(
    gameId: number,
    whitePlayer: Player,
    blackPlayer: Player,
    result: Result
  ) {
    this.gameId = gameId;
    this.whitePlayer = whitePlayer;
    this.blackPlayer = blackPlayer;
    this.result = result;
  }

  public getGameId(): number {
    return this.gameId;
  }

  public getIsWhiteToMove(): boolean | undefined {
    return this.isWhiteToMove;
  }

  public getWhitePlayer(): Player {
    return this.whitePlayer;
  }

  public getBlackPlayer(): Player {
    return this.blackPlayer;
  }

  public getResult(): Result {
    return this.result;
  }

  abstract startGame(): void;

  abstract endGame(): void;
}

export default Game;
