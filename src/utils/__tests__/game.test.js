import { getInitialBoard, moveDown } from "../game";

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
  it("should generate a new board after moving down - case 1", () => {
    const board = [
      null,
      1,
      2,
      null,
      1,
      null,
      2,
      1,
      2,
      1,
      1,
      null,
      1,
      null,
      null,
      2,
    ];

    const expectedBoard = [
      null,
      null,
      null,
      null,
      1,
      1,
      2,
      null,
      2,
      null,
      2,
      1,
      1,
      1,
      1,
      2,
    ];
    const generatedBoard = moveDown(board);

    expect(generatedBoard).toEqual(expectedBoard);
  });
  it("should generate a new board after moving down - case 2", () => {
    const board = [
      1,
      null,
      null,
      null,
      4,
      1,
      1,
      1,
      1,
      2,
      1,
      null,
      2,
      2,
      1,
      null,
    ];

    const expectedBoard = [
      1,
      null,
      null,
      null,
      4,
      null,
      null,
      null,
      1,
      1,
      1,
      1,
      2,
      4,
      2,
      null,
    ];
    const generatedBoard = moveDown(board);

    expect(generatedBoard).toEqual(expectedBoard);
  });
});
