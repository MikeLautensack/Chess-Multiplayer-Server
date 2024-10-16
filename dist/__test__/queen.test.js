import Position from "../Models/Position.js";
import Queen from "../Models/Queen.js";
describe("queen tests", () => {
    let queen;
    beforeAll(() => {
        queen = new Queen(new Position(1, "a", [7, 0]), "white");
    });
    afterAll(() => { });
    test("init queen", () => {
        // Assertions
        expect(queen).toBeDefined();
    });
});
