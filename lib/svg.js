class SVG {
  constructor(width, height, shape, text, textColor, basicShape) {
    this.width = width;
    this.height = height;
    this.shape = shape;
    this.text = text;
    this.textColor = textColor;

    switch (basicShape){
      case "Circle":
        this.textY = "50%";
        break;
      case "Triangle":
        this.textY = "60%";
        break;
      case "Square":
        this.textY = "50%";
      default:
        this.textY = "50%";
    }
  }

  createSVGElement() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}">${this.shape}<text x="50%" y="${this.textY}" text-anchor="middle" font-size="2.5em" dominant-baseline="middle" fill="${this.textColor}">${this.text.toUpperCase()}</text></svg>`;
  }
}

module.exports = SVG;
