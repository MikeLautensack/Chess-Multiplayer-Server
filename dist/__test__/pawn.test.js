import Pawn from "../Models/Pawn.js";
import Position from "../Models/Position.js";
describe("pawn tests", () => {
    let pawn;
    beforeAll(() => {
        pawn = new Pawn(1, new Position("2", "A"), "white");
    });
    afterAll(() => { });
    test("init pawn", () => {
        // Assertions
        expect(pawn).toBeDefined();
    });
});
