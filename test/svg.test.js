const SVG = require("../lib/svg.js");
const { Circle, Triangle, Square } = require("../lib/shapes");

// Write Tests
describe("SVG", () => {
    test("Blue circle svg returned with white text AMP", () => {
        const circle = new Circle();
        circle.setColor("blue");
        const svg = new SVG(
          300,
          200,
          circle.render(),
          "AMP",
          "white",
          "Circle"
        ).createSVGElement();
        expect(svg).toBe('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx="150" cy="100" r="90" fill="blue"/><text x="50%" y="50%" text-anchor="middle" font-size="2.5em" dominant-baseline="middle" fill="white">AMP</text></svg>');
    });
    test("Purple triangle svg returned with gray text CLI", () => {
        const triangle = new Triangle();
        triangle.setColor("purple");
        const svg = new SVG(300, 200, triangle.render(), "CLI", "#787878", "Triangle").createSVGElement();
        expect(svg).toBe('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill="purple"/><text x="50%" y="60%" text-anchor="middle" font-size="2.5em" dominant-baseline="middle" fill="#787878">CLI</text></svg>');
    });
    test("Yellow square svg returned with brown text TLP", () => {
        const square = new Square();
        square.setColor("yellow");
        const svg = new SVG(300, 200, square.render(), "TLP", "brown", "Square").createSVGElement();
        expect(svg).toBe('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect x="60" y="10" width="180" height="180" fill="yellow"/><text x="50%" y="50%" text-anchor="middle" font-size="2.5em" dominant-baseline="middle" fill="brown">TLP</text></svg>');
    });
});