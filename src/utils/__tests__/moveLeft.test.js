import { moveLeft } from "../game";
import { demoBoard1, demoBoard2, demoBoard3 } from "../__mock__/mockedBoards";

describe("Moving Left", () => {
  it("Case 1", () => {
    const expectedBoard = [
      1,
      2,
      null,
      null,
      1,
      2,
      1,
      null,
      2,
      2,
      null,
      null,
      1,
      null,
      2,
      null,
    ];
    const generatedBoard = moveLeft(demoBoard1);

    expect(generatedBoard).toEqual(expectedBoard);
  });
  it("Case 2", () => {
    const expectedBoard = [
      1,
      null,
      null,
      null,
      4,
      2,
      1,
      null,
      1,
      2,
      1,
      null,
      4,
      1,
      null,
      null,
    ];
    const generatedBoard = moveLeft(demoBoard2);

    expect(generatedBoard).toEqual(expectedBoard);
  });
  it("Case 3", () => {
    const expectedBoard = [1, 1, 2, null, null, 2, 2, null, null, null];
    const generatedBoard = moveLeft(demoBoard3, 2, 5);

    expect(generatedBoard).toEqual(expectedBoard);
  });
});
