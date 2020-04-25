import {
  addTopRightValue,
  addTopLeftValue,
  addBottomRightValue,
  addBottomLeftValue,
} from "../game";

describe("Add new value", () => {
  it("addTopRightValue", () => {
    const board = [1, null, 1, 2, 4, null, 2, 2, null, null];
    const generatedBoard = addTopRightValue(board, 2, 5);

    const targetIndex = 4;
    expect(generatedBoard[targetIndex]).not.toBe(board[targetIndex]);
  });
  it("addTopLeftValue", () => {
    const board = [4, null, 1, 2, null, null, 2, 2, null, null];
    const generatedBoard = addTopLeftValue(board, 2, 5);

    const targetIndex = 0;
    expect(generatedBoard[targetIndex]).not.toBe(board[targetIndex]);
  });
  it("addBottomRightValue", () => {
    const board = [1, null, 1, 2, null, null, 2, 2, null, 4];
    const generatedBoard = addBottomRightValue(board, 2, 5);

    const targetIndex = 9;
    expect(generatedBoard[targetIndex]).not.toBe(board[targetIndex]);
  });
  it("addBottomLeftValue", () => {
    const board = [1, null, 1, 2, null, 4, 2, 2, null, null];
    const generatedBoard = addBottomLeftValue(board, 2, 5);

    const targetIndex = 5;
    expect(generatedBoard[targetIndex]).not.toBe(board[targetIndex]);
  });
});
