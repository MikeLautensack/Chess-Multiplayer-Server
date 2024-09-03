import King from "../Models/King";
import Position from "../Models/Position";

describe("king tests", () => {
  let king: King;

  beforeAll(() => {
    king = new King(1, new Position("2", "A"), "white");
  });

  afterAll(() => {});

  test("init king", () => {
    // Assertions
    expect(king).toBeDefined();
  });
});
