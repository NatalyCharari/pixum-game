import React from "react";
import { connect } from "react-redux";
import Board from "../components/Board";
import { loadBoard } from "../reducers/actions";

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
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
