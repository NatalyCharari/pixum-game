import { moveRight } from "../game";
import { demoBoard1, demoBoard2, demoBoard3 } from "../__mock__/mockedBoards";

describe("Moving Right", () => {
  it("Case 1", () => {
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
  it("Case 2", () => {
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
  it("Case 3", () => {
    const expectedBoard = [null, 1, null, 1, 2, null, null, 2, 2, null];
    const generatedBoard = moveRight(demoBoard3, 2, 5);

    expect(generatedBoard).toEqual(expectedBoard);
  });
});
