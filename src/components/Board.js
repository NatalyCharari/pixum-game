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
    width: "40%",
    padding: "4%",
    margin: "auto",
  },
  cell: {
    border: "1px solid rgba(0, 0, 0, 0.2)",
  },
});

const Board = ({ classes, tiles, rows, columns, loadBoard, moveLeft }) => {
  useEffect(() => {
    loadBoard();
  }, [loadBoard]);

  useEffect(() => {
    window.addEventListener("keydown", onKeyPressed);
  }, [tiles]);

  const onKeyPressed = (event) => {
    console.log("tiles", tiles, rows, columns);
    switch (event.key) {
      case "ArrowDown":
        break;
      case "ArrowUp":
        break;
      case "ArrowLeft":
        moveLeft(tiles, rows, columns);
        break;
      case "ArrowRight":
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
    <TableContainer className={classes.root} component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableBody>{renderRows()}</TableBody>
      </Table>
    </TableContainer>
  );
};

Board.defaultProps = {
  tiles: [],
  rows: 0,
  columns: 0,
  loadBoard: () => {},
  moveLeft: () => {},
};

Board.propTypes = {
  tiles: PropTypes.array,
  rows: PropTypes.number,
  columns: PropTypes.number,
  loadBoard: PropTypes.func,
  moveLeft: PropTypes.func,
};

export default withStyles(styles, { name: "Board" })(Board);
