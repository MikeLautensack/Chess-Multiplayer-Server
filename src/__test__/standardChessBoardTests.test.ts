import Player from "../Models/Player.js";
import StandardChess from "../Models/StandardChess.js";
import StandardChessBoard, {
  files,
  ranks,
  startingPositions,
} from "../Models/StandardChessBoard.js";

describe("standard chess board tests", () => {
  let whitePlayer: Player;
  let blackPlayer: Player;
  let chess: StandardChess;
  let board: StandardChessBoard;

  beforeAll(() => {
    whitePlayer = new Player("whitePlayer");
    blackPlayer = new Player("blackPlayer");
    chess = new StandardChess(whitePlayer, blackPlayer);
    board = chess.getBoard();
  });

  afterAll(() => {});

  test("init standard chess board", () => {
    // Assertions
    for (let i = 0; i < board.getSquares().length; i++) {
      for (let j = 0; j < board.getSquares()[i].length; j++) {
        const rank = ranks.get(i);
        const file = files.get(j);
        const squareStr = `${file}${rank}`;
        const startPos = startingPositions.get(squareStr);
        expect(board.getSquares()[i][j].getPiece()?.getColor()).toBe(
          startPos?.pieceColor
        );
        expect(board.getSquares()[i][j].getPiece()?.getPieceStr()).toBe(
          startPos?.pieceType
        );
      }
    }
  });
});
