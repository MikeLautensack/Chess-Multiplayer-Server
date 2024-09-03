import Knight from "../Models/Knight";
import Position from "../Models/Position";

describe("knight tests", () => {
  let knight: Knight;

  beforeAll(() => {
    knight = new Knight(1, new Position("2", "A"), "white");
  });

  afterAll(() => {});

  test("init knight", () => {
    // Assertions
    expect(knight).toBeDefined();
  });
});
