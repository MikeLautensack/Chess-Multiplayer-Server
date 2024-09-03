import Bishop from "../Models/Bishop";
import Position from "../Models/Position";

describe("bishop tests", () => {
  let bishop: Bishop;

  beforeAll(() => {
    bishop = new Bishop(1, new Position("2", "A"), "white");
  });

  afterAll(() => {});

  test("init bishop", () => {
    // Assertions
    expect(bishop).toBeDefined();
  });
});
