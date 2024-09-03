import Player from "../Models/Player";
import StandardChess from "../Models/StandardChess";
import StandardChessBoard from "../Models/StandardChessBoard";

describe("standard chess tests", () => {
  let whitePlayer: Player;
  let blackPlayer: Player;
  let chess: StandardChess;
  let board: StandardChessBoard;

  beforeAll(() => {
    whitePlayer = new Player("whitePlayer", 1);
    blackPlayer = new Player("blackPlayer", 2);
    chess = new StandardChess(1, whitePlayer, blackPlayer, undefined);
    board = chess.getBoard();
  });

  afterAll(() => {});

  test("init standard chess", () => {
    // Assertions
    expect(chess).toBeDefined();
    expect(chess.getWhitePlayer()).toBeDefined();
    expect(chess.getBlackPlayer()).toBeDefined();
    expect(chess.getResult()).toBeUndefined();
  });

  test("start game", () => {
    // Assertions
  });
});
