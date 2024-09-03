import Pawn from "../Models/Pawn";
import Position from "../Models/Position";

describe("pawn tests", () => {
  let pawn: Pawn;

  beforeAll(() => {
    pawn = new Pawn(1, new Position("2", "A"), "white");
  });

  afterAll(() => {});

  test("init pawn", () => {
    // Assertions
    expect(pawn).toBeDefined();
  });
});
