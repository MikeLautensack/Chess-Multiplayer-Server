import Knight from "../Models/Knight.js";
import Position from "../Models/Position.js";
describe("knight tests", () => {
    let knight;
    beforeAll(() => {
        knight = new Knight(1, new Position("2", "A"), "white");
    });
    afterAll(() => { });
    test("init knight", () => {
        // Assertions
        expect(knight).toBeDefined();
    });
});
