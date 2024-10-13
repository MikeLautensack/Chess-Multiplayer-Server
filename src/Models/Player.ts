import { v4 as uuidv4 } from "uuid";

class Player {
  private username: string;
  private playerId: string;

  constructor(username: string) {
    this.username = username;
    this.playerId = uuidv4();
  }

  public getUsername(): string {
    return this.username;
  }

  public getPlayerId(): string {
    return this.playerId;
  }
}

export default Player;
