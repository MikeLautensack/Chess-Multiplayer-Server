import Pawn from "../Models/Pawn.js";
import Position from "../Models/Position.js";

describe("pawn tests", () => {
  let pawn: Pawn;

  beforeAll(() => {
    pawn = new Pawn(new Position(1, "a", [7, 0]), "white");
  });

  afterAll(() => {});

  test("init pawn", () => {
    // Assertions
    expect(pawn).toBeDefined();
  });
});
