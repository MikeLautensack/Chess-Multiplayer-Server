import Position from "../Models/Position";
import Rook from "../Models/Rook";

describe("rook tests", () => {
  let rook: Rook;

  beforeAll(() => {
    rook = new Rook(1, new Position("2", "A"), "white");
  });

  afterAll(() => {});

  test("init rook", () => {
    // Assertions
    expect(rook).toBeDefined();
  });
});
