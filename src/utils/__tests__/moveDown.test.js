import { moveDown } from "../game";
import { demoBoard1, demoBoard2, demoBoard3 } from "../__mock__/mockedBoards";

describe("Test game logic", () => {
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
  it("should generate a new board after moving down - case 3", () => {
    const expectedBoard = [null, null, 1, null, null, 1, 2, 2, 2, null];
    const generatedBoard = moveDown(demoBoard3, 2, 5);

    expect(generatedBoard).toEqual(expectedBoard);
  });
});
