import Bishop from "../Models/Bishop.js";
import Position from "../Models/Position.js";
describe("bishop tests", () => {
    let bishop;
    beforeAll(() => {
        bishop = new Bishop(1, new Position("2", "A"), "white");
    });
    afterAll(() => { });
    test("init bishop", () => {
        // Assertions
        expect(bishop).toBeDefined();
    });
});
