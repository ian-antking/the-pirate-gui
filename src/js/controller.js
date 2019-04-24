(function exportController() {
  class Controller {
    constructor(map) {
      this.map = map;
      this.selectedTile = null;
      this.mapElement = document.getElementById('map');
    }

    _renderMessage(message) {
      const messageBox = document.getElementById('message-box');
      messageBox.innerText = message;
    }

    _selectTile(tile) {
      this.selectedTile = tile;
      this.selectedTile.classList.add('selected-tile');
    }

    _deselectTile(tile) {
      tile.classList.remove('selected-tile');
      this.selectedTile = null;
    }

    _explore() {
      try {
        const coordinate = this.selectedTile ? this.map.explore(this.selectedTile.id) : this.map.explore();
        const tile = document.getElementById(coordinate);
        tile.classList.add('explored-tile');
        this._outputTurn(coordinate.toUpperCase());
        this._renderMessage(`Set sail for ${coordinate.toUpperCase()}!`);
        if (this.selectedTile) this._deselectTile(this.selectedTile);
      } catch (error) {
        this._renderMessage('Area has already been explored!');
      }
    }

    _outputTurn(coordinate) {
      const list = document.getElementById('output-list');
      const output = document.createElement('li');
      output.innerText = coordinate;
      list.appendChild(output);
    }

    createColumns(row) {
      const yAxisTile = document.createElement('div');
      yAxisTile.classList.add('axis-tile');
      yAxisTile.innerText = row.number;
      row.appendChild(yAxisTile);
      this.map.xAxis.forEach(letter => {
        const tile = document.createElement('div');
        tile.classList.add('map-tile');
        tile.id = `${letter}${row.number}`;
        tile.onclick = () => this.handleTileClick(tile);
        row.appendChild(tile);
      });
    }

    createXAxis() {
      const xAxis = document.createElement('div');
      xAxis.classList.add('row');
      const spacer = document.createElement('div');
      spacer.classList.add('axis-tile');
      xAxis.appendChild(spacer);
      this.map.xAxis.forEach(letter => {
        const xAxisTile = document.createElement('div');
        xAxisTile.classList.add('axis-tile');
        xAxisTile.innerHTML = letter;
        xAxis.appendChild(xAxisTile);
      });
      this.mapElement.appendChild(xAxis);
    }

    createRow(number) {
      const row = document.createElement('div');
      row.number = number;
      row.className = 'row';
      row.id = `row${number}`;
      this.createColumns(row);
      this.mapElement.appendChild(row);
    }

    handleTileClick(tile) {
      if (!this.selectedTile) {
        this._selectTile(tile);
      } else if (this.selectedTile === tile) {
        this._deselectTile(tile);
        this.selectedTile = null;
      } else {
        this._deselectTile(this.selectedTile);
        this._selectTile(tile);
      }
    }

    createMap() {
      this.createXAxis();
      for (let row = this.map.yAxis; row > 0; row -= 1) {
        this.createRow(row);
      }
    }

    handleExploreClick() {
      if (this.map.explored.length >= this.map.gridSize) {
        this._renderMessage('Game Over!');
      } else {
        this._explore();
      }
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
})();
