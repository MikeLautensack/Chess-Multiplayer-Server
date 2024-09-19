import { Access } from "../types.js";
import { genId } from "../utils/utils.js";
import Game from "./Game.js";
import Player from "./Player.js";

class Lobby {
  private lobbyId: number;
  private lobbyName: string;
  private players: Map<string, Player> = new Map<string, Player>();
  private games: Map<number, Game> = new Map<number, Game>();
  private host: Player;
  private access: Access;
  private password: string | undefined;
  private maxPlayers: number;

  constructor(
    lobbyName: string,
    host: Player,
    access: Access,
    password?: string,
    maxPlayers?: number
  ) {
    this.lobbyId = genId();
    this.lobbyName = lobbyName;
    this.host = host;
    this.players.set(host.getUsername(), host);
    this.access = access;
    access === "private" ? (this.password = password) : undefined;
    maxPlayers ? (this.maxPlayers = maxPlayers) : (this.maxPlayers = 16);
  }

  public getLobbyId(): number {
    return this.lobbyId;
  }

  public getLobbyName(): string {
    return this.lobbyName;
  }

  public getHost(): Player {
    return this.host;
  }

  public getPlayers(): Map<string, Player> {
    return this.players;
  }

  public getMaxPlayers(): number {
    return this.maxPlayers;
  }

  public getGames(): Map<number, Game> {
    return this.games;
  }

  public getAccess(): Access {
    return this.access;
  }

  public getPassword(): string | undefined {
    return this.password;
  }

  public addPlayer(player: Player): void {
    this.players.set(player.getUsername(), player);
  }

  public removePlayer(playerName: string): void {
    this.players.delete(playerName);
  }

  public addGame(game: Game): void {
    this.games.set(game.getGameId(), game);
  }

  public removeGame(gameId: number): void {
    this.games.delete(gameId);
  }
}

export default Lobby;
