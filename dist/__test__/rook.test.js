import Position from "../Models/Position.js";
import Rook from "../Models/Rook.js";
describe("rook tests", () => {
    let rook;
    beforeAll(() => {
        rook = new Rook(new Position(1, "a", [7, 0]), "white");
    });
    afterAll(() => { });
    test("init rook", () => {
        // Assertions
        expect(rook).toBeDefined();
    });
});
