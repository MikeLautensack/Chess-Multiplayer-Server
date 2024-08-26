class Player {
  private username: string;
  private playerId: number;

  constructor(username: string, playerId: number) {
    this.username = username;
    this.playerId = playerId;
  }

  public getUsername(): string {
    return this.username;
  }

  public getPlayerId(): number {
    return this.playerId;
  }
}

export default Player;
