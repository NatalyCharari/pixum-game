import {
  getInitialBoard,
  moveLeft,
  moveRight,
  moveUp,
  moveDown,
  addValueToTheRight,
  addValueToTheLeft,
  addValueToTheBottom,
  addValueToTheTop,
} from "../utils/game";

export const INIT_BOARD = "INIT_BOARD";
export const UPDATE_BOARD = "UPDATE_BOARD";

const initBoard = (board, rows, cols) => ({
  type: INIT_BOARD,
  payload: {
    board,
    rows,
    cols,
  },
});

const updateBoard = (board) => ({
  type: UPDATE_BOARD,
  payload: {
    board,
  },
});

export const loadBoard = (rows = 4, cols = 4) => (dispatch) => {
  const board = getInitialBoard(rows, cols);
  dispatch(initBoard(board, rows, cols));
};

export const moveCellsToLeft = (board = [], rows = 4, cols = 4) => (
  dispatch
) => {
  const movedBoard = moveLeft(board, rows, cols);
  const withNewValue = addValueToTheRight(movedBoard, rows, cols);
  dispatch(updateBoard(withNewValue));
};

export const moveCellsToRight = (board = [], rows = 4, cols = 4) => (
  dispatch
) => {
  const movedBoard = moveRight(board, rows, cols);
  const withNewValue = addValueToTheLeft(movedBoard, rows, cols);
  dispatch(updateBoard(withNewValue));
};

export const moveCellsUp = (board = [], rows = 4, cols = 4) => (dispatch) => {
  const movedBoard = moveUp(board, rows, cols);
  const withNewValue = addValueToTheBottom(movedBoard, rows, cols);
  dispatch(updateBoard(withNewValue));
};

export const moveCellsDown = (board = [], rows = 4, cols = 4) => (dispatch) => {
  const movedBoard = moveDown(board, rows, cols);
  const withNewValue = addValueToTheTop(movedBoard, rows, cols);
  dispatch(updateBoard(withNewValue));
};
