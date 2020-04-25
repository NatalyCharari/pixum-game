import {
  getInitialBoard,
  moveLeft,
  moveRight,
  moveUp,
  moveDown,
} from "../utils/game";

export const INIT_BOARD = "INIT_BOARD";
export const MOVE_CELLS = "MOVE_CELLS";

const initBoard = (board, rows, cols) => ({
  type: INIT_BOARD,
  payload: {
    board,
    rows,
    cols,
  },
});

const moveCells = (board) => ({
  type: MOVE_CELLS,
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
  const newBoard = moveLeft(board, rows, cols);
  dispatch(moveCells(newBoard));
};

export const moveCellsToRight = (board = [], rows = 4, cols = 4) => (
  dispatch
) => {
  const newBoard = moveRight(board, rows, cols);
  dispatch(moveCells(newBoard));
};

export const moveCellsUp = (board = [], rows = 4, cols = 4) => (dispatch) => {
  const newBoard = moveUp(board, rows, cols);
  dispatch(moveCells(newBoard));
};

export const moveCellsDown = (board = [], rows = 4, cols = 4) => (dispatch) => {
  const newBoard = moveDown(board, rows, cols);
  dispatch(moveCells(newBoard));
};
