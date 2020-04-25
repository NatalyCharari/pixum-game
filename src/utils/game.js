const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getInitialBoard = (rows = 4, columns = 4) => {
  const tiles = [];

  for (let i = 0; i < rows * columns; i++) {
    const random = randomIntFromInterval(0, 2);
    tiles.push(random === 0 ? null : random);
  }

  return tiles;
};

export const moveDown = (tiles = [], rows = 4, columns = 4) => {
  const newTiles = [...tiles];

  for (let i = newTiles.length - columns - 1; i >= 0; i--) {
    if (newTiles[i + columns]) {
      if (newTiles[i + columns] === newTiles[i]) {
        newTiles[i + columns] = newTiles[i + columns] + newTiles[i];
        newTiles[i] = null;
      }
    } else {
      newTiles[i + columns] = newTiles[i];
      newTiles[i] = null;
    }
  }

  return newTiles;
};

export const moveUp = (tiles = [], rows = 4, columns = 4) => {
  const newTiles = [...tiles];

  for (let i = columns; i < newTiles.length; i++) {
    if (newTiles[i - columns]) {
      if (newTiles[i - columns] === newTiles[i]) {
        newTiles[i - columns] = newTiles[i - columns] + newTiles[i];
        newTiles[i] = null;
      }
    } else {
      newTiles[i - columns] = newTiles[i];
      newTiles[i] = null;
    }
  }

  return newTiles;
};

export const moveRight = (tiles = [], rows = 4, columns = 4) => {
  const newTiles = [...tiles];
  let bottomIndex = tiles.length - 2;
  let i = bottomIndex;

  while (newTiles.length - 1 - i !== columns) {
    if (newTiles[i + 1]) {
      if (newTiles[i + 1] === newTiles[i]) {
        newTiles[i + 1] = newTiles[i + 1] + newTiles[i];
        newTiles[i] = null;
      }
    } else {
      newTiles[i + 1] = newTiles[i];
      newTiles[i] = null;
    }

    if (i - columns < 0) {
      bottomIndex -= 1;
      i = bottomIndex;
    } else {
      i -= columns;
    }
  }

  return newTiles;
};

export const moveLeft = (tiles = [], rows = 4, columns = 4) => {
  const newTiles = [...tiles];
  let topIndex = 1;
  let i = topIndex;

  while (i < newTiles.length) {
    if (newTiles[i - 1]) {
      if (newTiles[i - 1] === newTiles[i]) {
        newTiles[i - 1] = newTiles[i - 1] + newTiles[i];
        newTiles[i] = null;
      }
    } else {
      newTiles[i - 1] = newTiles[i];
      newTiles[i] = null;
    }

    if ((i + 1) % columns === 0) {
      topIndex += columns;
      i = topIndex;
    } else {
      i += 1;
    }
  }

  return newTiles;
};

export const addValueToTheTop = (tiles = [], rows = 4, columns = 4) => {
  const newTiles = [...tiles];

  for (let i = columns - 1; i >= 0; i--) {
    if (!tiles[i]) {
      newTiles[i] = randomIntFromInterval(1, 2);
      break;
    }
  }
  return newTiles;
};

export const addValueToTheLeft = (tiles = [], rows = 4, columns = 4) => {
  const newTiles = [...tiles];

  for (let i = 0; i < newTiles.length; i += columns) {
    if (!tiles[i]) {
      newTiles[i] = randomIntFromInterval(1, 2);
      break;
    }
  }
  return newTiles;
};

export const addValueToTheBottom = (tiles = [], rows = 4, columns = 4) => {
  const newTiles = [...tiles];

  for (let i = newTiles.length - 1; i >= newTiles.length - columns; i--) {
    if (!tiles[i]) {
      newTiles[i] = randomIntFromInterval(1, 2);
      break;
    }
  }
  return newTiles;
};

export const addValueToTheRight = (tiles = [], rows = 4, columns = 4) => {
  const newTiles = [...tiles];

  for (let i = columns - 1; i < newTiles.length; i += columns) {
    if (!tiles[i]) {
      newTiles[i] = randomIntFromInterval(1, 2);
      break;
    }
  }
  return newTiles;
};

export const findEqualityInNeighborhood = (tiles, i, columns) => {
  if (i - columns >= 0 && tiles[i - columns] === tiles[i]) {
    // The top value is equal to tiles[i]
    return true;
  }
  if (i + columns >= 0 && tiles[i + columns] === tiles[i]) {
    // The bottom value is equal to tiles[i]
    return true;
  }
  if (
    i + 1 < tiles.length &&
    (i + 1) % columns !== 0 &&
    tiles[i + 1] === tiles[i]
  ) {
    // The right value is equal to tiles[i]
    return true;
  }

  // Check the left value
  return i - 1 >= 0 && i % columns !== 0 && tiles[i - 1] === tiles[i];
};

export const findMoreMoves = (tiles = [], rows = 4, columns = 4) => {
  for (let i = 0; i < tiles.length - 1; i++) {
    if (tiles[i]) {
      if (findEqualityInNeighborhood(tiles, i, columns)) return true;
    } else {
      return true;
    }
  }

  return false;
};
