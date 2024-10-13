import Player from "./Player.js";
import { v4 as uuidv4 } from "uuid";

export type Result = undefined | "white won" | "black won" | "draw";

abstract class Game {
  protected gameId: string;
  protected isWhiteToMove: boolean | undefined = true;
  protected whitePlayer: Player;
  protected blackPlayer: Player;
  protected checkmate: boolean = false;
  protected stalemate: boolean = false;
  protected result: undefined | "white won" | "black won" | "draw" = undefined;

  constructor(whitePlayer: Player, blackPlayer: Player) {
    this.gameId = uuidv4();
    this.whitePlayer = whitePlayer;
    this.blackPlayer = blackPlayer;
  }

  public getGameId(): string {
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
