const LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const MAP_SQRT = 7;
class Map {
  constructor() {
    this.xAxis = LETTERS;
    this.yAxis = MAP_SQRT;
    this.explored = [];
  }

  _detectDuplicate(coordinate) {
    return this.explored.includes(coordinate);
  }

  _randomCoord() {
    const letter = this.xAxis[Math.floor(Math.random() * this.xAxis.length)];
    const number = Math.floor(Math.random() * this.yAxis);
    const coordinate = `${letter}${number}`;
    return coordinate;
  }

  _generateCoordinate() {
    let coordinate;
    let duplicate = true;
    while (duplicate) {
      coordinate = this._randomCoord();
      duplicate = this._detectDuplicate(coordinate);
    }
    return coordinate;
  }

  explore(coordinate = this._generateCoordinate()) {
    if (this._detectDuplicate(coordinate.toLocaleLowerCase())) {
      throw new Error('Coordinates have already been explored!');
    } else {
      this.explored.push(coordinate.toLowerCase());
    }
  }
}

module.exports = Map;
