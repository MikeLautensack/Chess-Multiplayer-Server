abstract class Game {
  protected gameId: number;
  protected whiteToMove: boolean = true;

  constructor(gameId: number, whiteToMove: boolean) {
    this.gameId = gameId;
    this.whiteToMove = whiteToMove;
  }

  public getGameId(): number {
    return this.gameId;
  }

  public getWhiteToMove(): boolean {
    return this.whiteToMove;
  }
}

export default Game;
