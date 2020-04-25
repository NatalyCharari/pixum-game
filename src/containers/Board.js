import React from "react";
import { connect } from "react-redux";
import Board from "../components/Board";
import {
  loadBoard,
  moveCellsDown,
  moveCellsToLeft,
  moveCellsToRight,
  moveCellsUp,
} from "../reducers/actions";

export const BoardContainer = (props) => {
  return <Board {...props} />;
};

const mapStateToProps = ({ reduxState }) => ({
  tiles: reduxState.board,
  rows: reduxState.rows,
  columns: reduxState.cols,
});

const mapDispatchToProps = (dispatch) => ({
  loadBoard: () => dispatch(loadBoard()),
  moveLeft: (board, rows, columns) =>
    dispatch(moveCellsToLeft(board, rows, columns)),
  moveRight: (board, rows, columns) =>
    dispatch(moveCellsToRight(board, rows, columns)),
  moveUp: (board, rows, columns) => dispatch(moveCellsUp(board, rows, columns)),
  moveDown: (board, rows, columns) =>
    dispatch(moveCellsDown(board, rows, columns)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
