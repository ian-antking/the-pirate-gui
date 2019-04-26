(function exportImage() {
  class Image {
    constructor() {
      this.skull = {
        columns: {
          a: [1, 1, 0, 0, 0, 0, 1],
          b: [1, 0, 0, 1, 1, 0, 0],
          c: [0, 0, 0, 1, 1, 0, 0],
          d: [0, 0, 1, 0, 0, 0, 0],
          e: [0, 0, 0, 1, 1, 0, 0],
          f: [1, 0, 0, 1, 1, 0, 0],
          g: [1, 1, 0, 0, 0, 0, 1],
        },
      };
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Image;
  } else {
    window.Image = Image;
  }
})();
