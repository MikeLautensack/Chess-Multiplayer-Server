import Game from "../Models/Game.js";
import Lobby from "../Models/Lobby.js";
import Player from "../Models/Player.js";
import StandardChess from "../Models/StandardChess.js";

describe("lobby tests", () => {
  let publicLobby: Lobby;
  let privateLobby: Lobby;
  let host: Player;
  let whitePlayer: Player;
  let blackPlayer: Player;
  let game: Game;

  beforeAll(() => {
    host = new Player("test host");
    whitePlayer = new Player("white player");
    blackPlayer = new Player("black player");
    publicLobby = new Lobby("test public lobby", host, "public");
    privateLobby = new Lobby(
      "test private lobby",
      host,
      "private",
      "test password"
    );
    game = new StandardChess(whitePlayer, blackPlayer);
  });

  afterAll(() => {});

  test("init lobby", () => {
    // Public Lobby Assertions
    expect(publicLobby).toBeDefined();
    expect(publicLobby.getLobbyId()).toBeDefined();
    // expect(publicLobby.getLobbyId().toString().length).toBe(8);
    expect(publicLobby.getLobbyName()).toBe("test public lobby");
    expect(publicLobby.getAccess()).toBe("public");
    expect(publicLobby.getPassword()).toBeUndefined();
    expect(publicLobby.getHost().getUsername()).toBe("test host");
    expect(publicLobby.getGames().size).toBe(0);
    expect(publicLobby.getPlayers().size).toBe(1);
    expect(publicLobby.getPlayers().has(host.getUsername())).toBeTruthy();
    expect(publicLobby.getMaxPlayers()).toBe(16);

    // Private Lobby Assertions
    expect(privateLobby).toBeDefined();
    expect(privateLobby.getLobbyId()).toBeDefined();
    // expect(privateLobby.getLobbyId().toString().length).toBe(8);
    expect(privateLobby.getLobbyName()).toBe("test private lobby");
    expect(privateLobby.getAccess()).toBe("private");
    expect(privateLobby.getPassword()).toBe("test password");
    expect(privateLobby.getHost().getUsername()).toBe("test host");
    expect(privateLobby.getGames().size).toBe(0);
    expect(privateLobby.getPlayers().size).toBe(1);
    expect(privateLobby.getPlayers().has(host.getUsername())).toBeTruthy();
    expect(privateLobby.getMaxPlayers()).toBe(16);
  });

  test("add player", () => {
    // Mutations
    publicLobby.addPlayer(whitePlayer);
    privateLobby.addPlayer(whitePlayer);

    // Public Lobby Assertions
    expect(publicLobby.getPlayers().size).toBe(2);
    expect(publicLobby.getPlayers().has(host.getUsername())).toBeTruthy();
    expect(
      publicLobby.getPlayers().has(whitePlayer.getUsername())
    ).toBeTruthy();

    // Private Lobby Assertions
    expect(privateLobby.getPlayers().size).toBe(2);
    expect(privateLobby.getPlayers().has(host.getUsername())).toBeTruthy();
    expect(
      privateLobby.getPlayers().has(whitePlayer.getUsername())
    ).toBeTruthy();
  });

  test("remove player", () => {
    // Mutations
    publicLobby.addPlayer(whitePlayer);
    privateLobby.addPlayer(whitePlayer);
    publicLobby.removePlayer(whitePlayer.getUsername());
    privateLobby.removePlayer(whitePlayer.getUsername());

    // Public Lobby Assertions
    expect(publicLobby.getPlayers().size).toBe(1);
    expect(publicLobby.getPlayers().has(host.getUsername())).toBeTruthy();
    expect(publicLobby.getPlayers().has(whitePlayer.getUsername())).toBeFalsy();

    // Private Lobby Assertions
    expect(privateLobby.getPlayers().size).toBe(1);
    expect(privateLobby.getPlayers().has(host.getUsername())).toBeTruthy();
    expect(
      privateLobby.getPlayers().has(whitePlayer.getUsername())
    ).toBeFalsy();
  });

  test("add game", () => {
    // Mutations
    publicLobby.addGame(game);
    privateLobby.addGame(game);

    // Public Lobby Assertions
    expect(publicLobby.getGames().size).toBe(1);
    expect(publicLobby.getGames().has(game.getGameId())).toBeTruthy();

    // Private Lobby Assertions
    expect(privateLobby.getGames().size).toBe(1);
    expect(privateLobby.getGames().has(game.getGameId())).toBeTruthy();
  });

  test("remove game", () => {
    // Mutations for add tests
    publicLobby.addGame(game);
    privateLobby.addGame(game);
    publicLobby.removeGame(game.getGameId());
    privateLobby.removeGame(game.getGameId());

    // Public Lobby Assertions
    expect(publicLobby.getGames().size).toBe(0);
    expect(publicLobby.getGames().has(game.getGameId())).toBeFalsy();

    // Private Lobby Assertions
    expect(privateLobby.getGames().size).toBe(0);
    expect(privateLobby.getGames().has(game.getGameId())).toBeFalsy();
  });
});
