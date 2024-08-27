abstract class Game {
  private gameId: number;

  constructor(gameId: number) {
    this.gameId = gameId;
  }

  public getGameId(): number {
    return this.gameId;
  }
}
