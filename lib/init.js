const inquirer = require("inquirer");
const fs = require("fs");
const SVG = require("./svg.js");
const { Circle, Triangle, Square } = require("./shapes");

// Initializer class to handle user prompts
class Initializer {
  constructor() {
    // Any initialization if needed
    this.questions = [
      {
        type: "input",
        name: "logoText",
        message: "Enter up to three characters for the logo text:",
        validate: (text) =>
          text.length <= 3 ||
          "The message must not contain more than 3 characters",
      },
      {
        type: "input",
        name: "textColor",
        message: "Enter the text color (name or hex code):",
        validate: (input) => input !== "" || "Text color cannot be empty.",
      },
      {
        type: "list",
        name: "shape",
        message: "Choose a shape for the logo:",
        choices: ["Circle", "Triangle", "Square"],
      },
      {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape color (name or hex code):",
        validate: (input) => input !== "" || "Shape color cannot be empty.",
      },
    ];
  }
  // Method to run the prompts
  run() {
    return inquirer
      .prompt(this.questions)
      .then((answers) => {
        console.log("Generating logo with the following details:");
        console.log(answers);
        let shape;
        switch (answers.shape) {
          case "Circle":
            const circle = new Circle().setColor(answers.shapeColor);
            shape = circle.render();
            break;
          case "Triangle":
            const triangle = new Triangle().setColor(answers.shapeColor);
            shape = triangle.render();
            break;
          case "Square":
            const square = new Square().setColor(answers.shapeColor);
            shape = square.render();
            break;
        }
        const svg = new SVG(
          300,
          200,
          shape,
          answers.logoText,
          answers.textColor
        ).createSVGElement();

        fs.writeFile("logo.svg", svg, (err) => console.log(err));
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }
}

module.exports = { Initializer };
