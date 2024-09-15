import Game from "./Game.js";
import Player from "./Player.js";

class Lobby {
  private lobbyId: number;
  private lobbyName: string;
  private players: Player[];
  private games: Game[];

  constructor(
    lobbyId: number,
    lobbyName: string,
    players: Player[],
    games: Game[]
  ) {
    this.lobbyId = lobbyId;
    this.lobbyName = lobbyName;
    this.players = players;
    this.games = games;
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

  public getGames(): Game[] {
    return this.games;
  }
}

export default Lobby;
