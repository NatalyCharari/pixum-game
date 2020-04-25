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
