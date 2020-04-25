import { getInitialBoard } from "../utils/game";

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

const moveLeft = () => ({
  type: MOVE_LEFT,
});

const moveRight = () => ({
  type: MOVE_RIGHT,
});

const moveUp = () => ({
  type: MOVE_UP,
});

const moveDown = () => ({
  type: MOVE_DOWN,
});

export const fillBoard = (rows = 4, cols = 4) => (dispatch) => {
  const board = getInitialBoard(rows, cols);
  dispatch(initBoard(board, rows, cols));
};
