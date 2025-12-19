class SVG {
  constructor(width, height, shape, text, textColor) {
    this.width = width;
    this.height = height;
    this.shape = shape;
    this.text = text;
    this.textColor = textColor;
  }

  createSVGElement() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}">${this.shape}<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="${this.textColor}">${this.text}</text></svg>`;
  }
}

module.exports = SVG;
