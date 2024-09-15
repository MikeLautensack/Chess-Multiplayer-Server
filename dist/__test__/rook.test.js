import Position from "../Models/Position.js";
import Rook from "../Models/Rook.js";
describe("rook tests", () => {
    let rook;
    beforeAll(() => {
        rook = new Rook(1, new Position("2", "A"), "white");
    });
    afterAll(() => { });
    test("init rook", () => {
        // Assertions
        expect(rook).toBeDefined();
    });
});
