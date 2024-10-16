import Player from "../Models/Player.js";
import StandardChess from "../Models/StandardChess.js";
describe("standard chess tests", () => {
    let whitePlayer;
    let blackPlayer;
    let chess;
    let board;
    beforeAll(() => {
        whitePlayer = new Player("whitePlayer");
        blackPlayer = new Player("blackPlayer");
        chess = new StandardChess(whitePlayer, blackPlayer);
        board = chess.getBoard();
    });
    afterAll(() => { });
    test("init standard chess", () => {
        // Assertions
        expect(chess).toBeDefined();
        expect(board).toBeDefined();
        expect(chess.getWhitePlayer()).toBeDefined();
        expect(chess.getBlackPlayer()).toBeDefined();
        expect(chess.getResult()).toBeUndefined();
        expect(chess.getIsWhiteToMove()).toBeTruthy();
        expect(chess.getMoves()).toBeDefined();
    });
    test("start game", () => {
        // Assertions
    });
});
