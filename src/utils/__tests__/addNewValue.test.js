import {
  addValueToTheTop,
  addValueToTheLeft,
  addValueToTheBottom,
  addValueToTheRight,
} from "../game";

describe("Add new value", () => {
  it("addValueToTheTop - case 1", () => {
    const board = [1, null, 1, 2, null, null, 2, 2, null, null];
    const generatedBoard = addValueToTheTop(board, 2, 5);

    const targetIndex = 4;
    expect(generatedBoard[targetIndex]).not.toBe(board[targetIndex]);
  });
  it("addValueToTheTop - case 2", () => {
    const board = [1, null, 1, 2, 1, null, 2, 2, null, null];
    const generatedBoard = addValueToTheTop(board, 2, 5);

    const targetIndex = 1;
    expect(generatedBoard[targetIndex]).not.toBe(board[targetIndex]);
  });
  it("addValueToTheLeft - case 1", () => {
    const board = [null, null, 1, 2, null, null, 2, 2, null, null];
    const generatedBoard = addValueToTheLeft(board, 2, 5);

    const targetIndex = 0;
    expect(generatedBoard[targetIndex]).not.toBe(board[targetIndex]);
  });
  it("addValueToTheLeft - case 2", () => {
    const board = [1, null, 1, 2, null, null, 2, 2, null, null];
    const generatedBoard = addValueToTheLeft(board, 2, 5);

    const targetIndex = 5;
    expect(generatedBoard[targetIndex]).not.toBe(board[targetIndex]);
  });
  it("addValueToTheLeft - case 3", () => {
    const board = [1, null, 1, 2, null, 1, 2, 2, null, null];
    const generatedBoard = addValueToTheLeft(board, 2, 5);

    expect(generatedBoard[0]).toBe(board[0]);
    expect(generatedBoard[5]).toBe(board[5]);
  });
  it("addValueToTheBottom - case 1", () => {
    const board = [1, null, 1, 2, null, null, 2, 2, null, null];
    const generatedBoard = addValueToTheBottom(board, 2, 5);

    const targetIndex = 9;
    expect(generatedBoard[targetIndex]).not.toBe(board[targetIndex]);
  });
  it("addValueToTheBottom - case 2", () => {
    const board = [1, null, 1, 2, null, null, 2, 2, null, 2];
    const generatedBoard = addValueToTheBottom(board, 2, 5);

    const targetIndex = 8;
    expect(generatedBoard[targetIndex]).not.toBe(board[targetIndex]);
  });
  it("addValueToTheRight - case 1", () => {
    const board = [1, null, 1, 2, null, null, 2, 2, null, null];
    const generatedBoard = addValueToTheRight(board, 2, 5);

    const targetIndex = 4;
    expect(generatedBoard[targetIndex]).not.toBe(board[targetIndex]);
  });
  it("addValueToTheRight - case 2", () => {
    const board = [1, null, 1, 2, 1, null, 2, 2, null, null];
    const generatedBoard = addValueToTheRight(board, 2, 5);

    const targetIndex = 9;
    expect(generatedBoard[targetIndex]).not.toBe(board[targetIndex]);
  });
});
