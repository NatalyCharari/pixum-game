import { getInitialBoard, moveLeft } from "../utils/game";

export const INIT_BOARD = "INIT_BOARD";
export const MOVE_LEFT = "MOVE_LEFT";
export const MOVE_RIGHT = "MOVE_RIGHT";
export const MOVE_UP = "MOVE_UP";
export const MOVE_DOWN = "MOVE_DOWN";

const initBoard = (board, rows, cols) => ({
  type: INIT_BOARD,
  payload: {
    board,
    rows,
    cols,
  },
});

const moveToLeft = (board) => ({
  type: MOVE_LEFT,
  payload: {
    board,
  },
});

const moveToRight = () => ({
  type: MOVE_RIGHT,
});

const moveToUp = () => ({
  type: MOVE_UP,
});

const moveToDown = () => ({
  type: MOVE_DOWN,
});

export const loadBoard = (rows = 4, cols = 4) => (dispatch) => {
  const board = getInitialBoard(rows, cols);
  dispatch(initBoard(board, rows, cols));
};

export const moveCellsToLeft = (board = [], rows = 4, cols = 4) => (
  dispatch
) => {
  const newBoard = moveLeft(board, rows, cols);
  dispatch(moveToLeft(newBoard));
};
