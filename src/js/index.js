const LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

const map = new Map();

function createColumns(row) {
  LETTERS.forEach(letter => {
    const tile = document.createElement('div');
    tile.className = 'map-tile';
    tile.id = `${letter}${row.number}`;
    row.appendChild(tile);
  });
}

function createRow(number) {
  const mapElement = document.getElementById('map');
  const row = document.createElement('div');
  row.number = number;
  row.className = 'row';
  row.id = `row${number}`;
  createColumns(row);
  mapElement.appendChild(row);
}

function createMap() {
  for (let row = 7; row > 0; row -= 1) {
    createRow(row);
  }
}

function explore() {
  let coordinate;
  try {
    coordinate = map.explore();
    const tile = document.getElementById(coordinate);
    tile.className = 'explored-tile';
  } catch (error) {
    return error.message;
  }
}
