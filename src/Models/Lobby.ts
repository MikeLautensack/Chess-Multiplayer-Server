import Player from "./Player";

class Lobby {
  private lobbyId: number;
  private lobbyName: string;
  private players: Player[];

  constructor(lobbyId: number, lobbyName: string, players: Player[]) {
    this.lobbyId = lobbyId;
    this.lobbyName = lobbyName;
    this.players = players;
  }

  public getLobbyId(): number {
    return this.lobbyId;
  }

  public getLobbyName(): string {
    return this.lobbyName;
  }

  public getPlayers(): Player[] {
    return this.players;
  }
}

export default Lobby;
