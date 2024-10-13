import Knight from "../Models/Knight.js";
import Position from "../Models/Position.js";

describe("knight tests", () => {
  let knight: Knight;

  beforeAll(() => {
    knight = new Knight(new Position(1, "a", [7, 0]), "white");
  });

  afterAll(() => {});

  test("init knight", () => {
    // Assertions
    expect(knight).toBeDefined();
  });
});
