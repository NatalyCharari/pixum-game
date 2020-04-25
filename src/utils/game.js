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
