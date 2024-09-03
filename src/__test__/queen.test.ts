import Position from "../Models/Position";
import Queen from "../Models/Queen";

describe("queen tests", () => {
  let queen: Queen;

  beforeAll(() => {
    queen = new Queen(1, new Position("2", "A"), "white");
  });

  afterAll(() => {});

  test("init queen", () => {
    // Assertions
    expect(queen).toBeDefined();
  });
});
