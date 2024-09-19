import { genId } from "../utils/utils.js";
import Player from "./Player.js";

export type Result = undefined | "white won" | "black won" | "draw";

abstract class Game {
  protected gameId: number;
  protected isWhiteToMove: boolean | undefined = true;
  protected whitePlayer: Player;
  protected blackPlayer: Player;
  protected result: undefined | "white won" | "black won" | "draw" = undefined;

  constructor(whitePlayer: Player, blackPlayer: Player) {
    this.gameId = genId();
    this.whitePlayer = whitePlayer;
    this.blackPlayer = blackPlayer;
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

  abstract makeMove(): void;

  abstract endGame(): void;
}

export default Game;
