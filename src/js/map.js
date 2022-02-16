(function exportMap () {
  class Map {
    constructor (xAxis, yAxis) {
      this.xAxis = xAxis
      this.yAxis = yAxis
      this.gridSize = this.yAxis ** 2
      this.explored = []
    }

    _detectDuplicate (coordinate) {
      return this.explored.includes(coordinate)
    }

    _randomCoord () {
      const letter = this.xAxis[Math.floor(Math.random() * this.xAxis.length)]
      const number = Math.ceil(Math.random() * this.yAxis)
      const coordinate = `${letter}${number}`
      return coordinate
    }

    _generateCoordinate () {
      let coordinate
      let duplicate = true
      while (duplicate) {
        coordinate = this._randomCoord()
        duplicate = this._detectDuplicate(coordinate)
      }
      return coordinate
    }

    explore (coordinate = this._generateCoordinate()) {
      if (this.explored.length === this.gridSize) {
        throw new Error('Game Over!')
      }
      if (this._detectDuplicate(coordinate.toLowerCase())) {
        throw new Error('Coordinates have already been explored!')
      } else {
        this.explored.push(coordinate.toLowerCase())
      }
      return coordinate
    }
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Map
  } else {
    window.Map = Map
  }
})()
