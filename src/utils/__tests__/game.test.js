import { getInitialBoard, moveDown, moveRight, moveUp } from "../game";

const demoBoard1 = [
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

const demoBoard2 = [
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
    const generatedBoard = moveDown(demoBoard1);

    expect(generatedBoard).toEqual(expectedBoard);
  });
  it("should generate a new board after moving down - case 2", () => {
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
    const generatedBoard = moveDown(demoBoard2);

    expect(generatedBoard).toEqual(expectedBoard);
  });
  it("should generate a new board after moving up - case 1", () => {
    const expectedBoard = [
      1,
      1,
      4,
      1,
      2,
      1,
      1,
      null,
      1,
      null,
      null,
      2,
      null,
      null,
      null,
      null,
    ];
    const generatedBoard = moveUp(demoBoard1);

    expect(generatedBoard).toEqual(expectedBoard);
  });
  it("should generate a new board after moving up - case 2", () => {
    const expectedBoard = [
      1,
      1,
      1,
      1,
      4,
      2,
      1,
      null,
      1,
      2,
      1,
      null,
      2,
      null,
      null,
      null,
    ];
    const generatedBoard = moveUp(demoBoard2);

    expect(generatedBoard).toEqual(expectedBoard);
  });
  it("should generate a new board after moving right - case 1", () => {
    const expectedBoard = [
      null,
      null,
      1,
      2,
      null,
      1,
      2,
      1,
      null,
      2,
      1,
      1,
      null,
      1,
      null,
      2,
    ];
    const generatedBoard = moveRight(demoBoard1);

    expect(generatedBoard).toEqual(expectedBoard);
  });
  it("should generate a new board after moving right - case 2", () => {
    const expectedBoard = [
      null,
      1,
      null,
      null,
      null,
      4,
      1,
      2,
      null,
      1,
      2,
      1,
      null,
      2,
      2,
      1,
    ];
    const generatedBoard = moveRight(demoBoard2);

    expect(generatedBoard).toEqual(expectedBoard);
  });
});
