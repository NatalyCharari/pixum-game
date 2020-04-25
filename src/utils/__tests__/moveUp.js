import { moveUp } from "../game";
import { demoBoard1, demoBoard2 } from "../__mock__/mockedBoards";

describe("Test game logic", () => {
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
});
