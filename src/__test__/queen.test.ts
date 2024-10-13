import Position from "../Models/Position.js";
import Queen from "../Models/Queen.js";

describe("queen tests", () => {
  let queen: Queen;

  beforeAll(() => {
    queen = new Queen(1, new Position(1, "a", [7, 0]), "white");
  });

  afterAll(() => {});

  test("init queen", () => {
    // Assertions
    expect(queen).toBeDefined();
  });
});
