import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableContainer from "@material-ui/core/TableContainer";

const styles = () => ({
  root: {
    height: "90vh",
  },
  container: {
    width: "40%",
    padding: "4%",
    margin: "auto",
  },
  cell: {
    border: "1px solid rgba(0, 0, 0, 0.2)",
  },
});

const Board = ({
  classes,
  tiles,
  rows,
  columns,
  loadBoard,
  moveLeft,
  moveRight,
  moveUp,
  moveDown,
}) => {
  useEffect(() => {
    loadBoard();
  }, [loadBoard]);

  const onKeyPressed = (event) => {
    switch (event.key) {
      case "ArrowDown":
        moveDown(tiles, rows, columns);
        break;
      case "ArrowUp":
        moveUp(tiles, rows, columns);
        break;
      case "ArrowLeft":
        moveLeft(tiles, rows, columns);
        break;
      case "ArrowRight":
        moveRight(tiles, rows, columns);
        break;
      default:
        break;
    }
  };

  const renderCells = (data, rowIndex) => {
    return data.map((value, index) => (
      <TableCell
        align="center"
        className={classes.cell}
        key={`col-${rowIndex * columns + index}`}
      >
        {value}
      </TableCell>
    ));
  };

  const renderRows = () => {
    const components = [];
    for (let i = 0; i < rows; i++) {
      const firstIndex = i * columns;
      const rowData = tiles.slice(firstIndex, firstIndex + columns);

      components.push(
        <TableRow key={`row-${i}`}>{renderCells(rowData, i)}</TableRow>
      );
    }

    return components;
  };

  return (
    <div
      className={classes.root}
      tabIndex={0}
      onKeyDown={(event) => onKeyPressed(event)}
    >
      <TableContainer className={classes.container} component={Paper}>
        <Table className={classes.table} aria-label="spanning table">
          <TableBody>{renderRows()}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

Board.defaultProps = {
  tiles: [],
  rows: 0,
  columns: 0,
  loadBoard: () => {},
  moveLeft: () => {},
  moveRight: () => {},
  moveUp: () => {},
  moveDown: () => {},
};

Board.propTypes = {
  tiles: PropTypes.array,
  rows: PropTypes.number,
  columns: PropTypes.number,
  loadBoard: PropTypes.func,
  moveLeft: PropTypes.func,
  moveRight: PropTypes.func,
  moveUp: PropTypes.func,
  moveDown: PropTypes.func,
};

export default withStyles(styles, { name: "Board" })(Board);
