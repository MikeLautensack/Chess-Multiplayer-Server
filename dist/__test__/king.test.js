import King from "../Models/King.js";
import Position from "../Models/Position.js";
describe("king tests", () => {
    let king;
    beforeAll(() => {
        king = new King(new Position(1, "a", [7, 0]), "white");
    });
    afterAll(() => { });
    test("init king", () => {
        // Assertions
        expect(king).toBeDefined();
    });
});
