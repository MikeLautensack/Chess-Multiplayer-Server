import { genId } from "../utils/utils.js";

class Player {
  private username: string;
  private playerId: number;

  constructor(username: string) {
    this.username = username;
    this.playerId = genId();
  }

  public getUsername(): string {
    return this.username;
  }

  public getPlayerId(): number {
    return this.playerId;
  }
}

export default Player;
