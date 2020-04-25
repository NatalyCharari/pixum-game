import { findMoreMoves, findEqualityInNeighborhood } from "../game";
import { demoBoard4, demoBoard5 } from "../__mock__/mockedBoards";

describe("Find Moves", () => {
  it("findEqualityInNeighborhood - case 1", () => {
    const expectedResult = false;
    const cellToCheck = 4;
    const generatedResult = findEqualityInNeighborhood(
      demoBoard4,
      cellToCheck,
      3
    );
    expect(generatedResult).toBe(expectedResult);
  });
  it("findEqualityInNeighborhood - case 2", () => {
    const expectedResult = true;
    const cellToCheck = 4;
    const generatedResult = findEqualityInNeighborhood(
      demoBoard5,
      cellToCheck,
      3
    );
    expect(generatedResult).toBe(expectedResult);
  });
  it("findMoreMoves - case 1", () => {
    const expectedResult = true;
    const generatedResult = findMoreMoves(demoBoard4, 3, 3);
    expect(generatedResult).toBe(expectedResult);
  });
  it("findMoreMoves - case 2", () => {
    const expectedResult = true;
    const generatedResult = findMoreMoves(demoBoard5, 3, 3);
    expect(generatedResult).toBe(expectedResult);
  });
});
