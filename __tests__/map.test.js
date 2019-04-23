const Map = require('../src/js/map.js');

describe('Map', () => {
  let map;
  beforeEach(() => {
    map = new Map();
  });
  it('constructor returns an object', () => {
    expect(map).toBeInstanceOf(Object);
  });
  it('has an array of explored coordinates', () => {
    expect(map).toHaveProperty('explored');
  });
  it('_generateCoordinate returns a coordinate', () => {
    const coordinate = map._generateCoordinate();
    expect(typeof coordinate).toBe('string');
  });
  it('calling explore method pushes coordinate to explored array', () => {
    map.explore();
    expect(map.explored.length).toBe(1);
  });
  it('_detectDuplicate returns true if duplicate detected', () => {
    map.explored.push('a1');
    expect(map._detectDuplicate('a1')).toBe(true);
  });
  it('_detectDuplicate returns false if no duplicate detected', () => {
    map.explored.push('a1');
    expect(map._detectDuplicate('b1')).toBe(false);
  });
  it('explore will not push duplicate coordinates', () => {
    const gridSize = 7 ** 2;
    for (let i = 1; i < gridSize; i += 1) {
      map.explore();
    }
    const coordinatesSet = new Set(map.explored);
    expect(map.explored.length).toEqual(coordinatesSet.size);
  });
  it('explore can add a specified coordinate to explored array', () => {
    map.explore('mockCoord');
    expect(map.explored[0]).toBe('mockcoord');
  });
  it('explore checks specified coordinate for duplicates', () => {
    map.explored.push('a1');
    expect(() => map.explore('a1').toThrowError('Coordinates have already been explored!'));
  });
  it('capital letters do not break _detectDuplicate', () => {
    map.explore('A1');
    expect(map.explored[0]).toBe('a1');
  });
  it('throws an error when the game is over', () => {
    for (let i = 1; i <= 7 ** 2; i += 1) {
      map.explored.push(i);
    }
    expect(() => map.explore()).toThrow('Game Over!');
  });
});
