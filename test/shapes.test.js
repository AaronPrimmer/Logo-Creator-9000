const { Circle, Triangle, Square } = require("../lib/shapes");

describe("Circle", () => {
  test("Circle render method returns correct SVG string", () => {
    const circle = new Circle();
    circle.setColor("red");
    expect(circle.render()).toEqual(
      '<circle cx="200" cy="200" r="100" fill="red"/>'
    );
  });
  test("Circle render method with green color", () => {
    const circle = new Circle();
    circle.setColor("green");
    expect(circle.render()).toEqual(
      '<circle cx="200" cy="200" r="100" fill="green"/>'
    );
  });
});

describe("Triangle", () => {
  test("Triangle render method returns correct SVG string", () => {
    const triangle = new Triangle();
    triangle.setColor("blue");
    expect(triangle.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue"/>'
    );
  });
  test("Triangle render method with yellow color", () => {
    const triangle = new Triangle();
    triangle.setColor("yellow");
    expect(triangle.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="yellow"/>'
    );
  });
});

describe("Square", () => {
  test("Square render method returns correct SVG string", () => {
    const square = new Square();
    square.setColor("purple");
    expect(square.render()).toEqual(
      '<rect x="90" y="40" width="120" height="120" fill="purple"/>'
    );
  });
  test("Square render method with orange color", () => {
    const square = new Square();
    square.setColor("orange");
    expect(square.render()).toEqual(
      '<rect x="90" y="40" width="120" height="120" fill="orange"/>'
    );
  });
});
