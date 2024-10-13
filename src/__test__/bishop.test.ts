import Bishop from "../Models/Bishop.js";
import Position from "../Models/Position.js";

describe("bishop tests", () => {
  let bishop: Bishop;

  beforeAll(() => {
    bishop = new Bishop(1, new Position(1, "a", [7, 0]), "white");
  });

  afterAll(() => {});

  test("init bishop", () => {
    // Assertions
    expect(bishop).toBeDefined();
  });
});
