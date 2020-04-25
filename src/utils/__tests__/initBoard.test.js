import { getInitialBoard } from "../game";

describe("Test game logic", () => {
  it("should generate a board of rows x columns size", () => {
    const rows = 5;
    const columns = 2;

    const generatedBoard = getInitialBoard(rows, columns);
    expect(generatedBoard).toHaveLength(rows * columns);
  });
  it("should generate a board of 4 x 4 size, by default", () => {
    const generatedBoard = getInitialBoard();
    expect(generatedBoard).toHaveLength(16);
  });
});
