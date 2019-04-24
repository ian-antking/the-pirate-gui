(function exportController() {
  class Controller {
    constructor(map) {
      // this.letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
      this.map = map;
    }

    createColumns(row) {
      this.map.xAxis.forEach(letter => {
        const tile = document.createElement('div');
        tile.className = 'map-tile';
        tile.id = `${letter}${row.number}`;
        row.appendChild(tile);
      });
    }

    createRow(number) {
      const mapElement = document.getElementById('map');
      const row = document.createElement('div');
      row.number = number;
      row.className = 'row';
      row.id = `row${number}`;
      this.createColumns(row);
      mapElement.appendChild(row);
    }

    createMap() {
      for (let row = this.map.yAxis; row > 0; row -= 1) {
        this.createRow(row);
      }
    }

    explore() {
      const coordinate = this.map.explore();
      const tile = document.getElementById(coordinate);
      tile.className = 'explored-tile';
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
})();
